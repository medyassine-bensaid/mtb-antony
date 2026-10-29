/**
 * Small progressive-enhancement layer. The site is fully usable without it.
 */
type Slot = { open: string; close: string };
type Hours = Record<string, Slot[]>;

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Current day key and minutes since midnight in Paris, whatever the visitor's timezone. */
function parisNow(): { day: string; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const day = get('weekday').slice(0, 3).toLowerCase();
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

const toMin = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};
const fr = (t: string) => {
  if (t === '24:00' || t === '00:00') return 'minuit';
  const [h, m] = t.split(':');
  return m === '00' ? `${Number(h)} h` : `${Number(h)} h ${m}`;
};

function statusFor(hours: Hours): { open: boolean; text: string } {
  const { day, minutes } = parisNow();
  const today = hours[day] ?? [];
  for (const s of today) {
    const o = toMin(s.open);
    const c = toMin(s.close);
    if (minutes >= o && minutes < c) {
      const left = c - minutes;
      return {
        open: true,
        text: left <= 45 ? `Ouvert · ferme bientôt (${fr(s.close)})` : `Ouvert · jusqu’à ${fr(s.close)}`,
      };
    }
    if (minutes < o) return { open: false, text: `Fermé · ouvre à ${fr(s.open)}` };
  }
  // find next opening day
  const idx = DAYS.indexOf(day);
  for (let i = 1; i <= 7; i++) {
    const d = DAYS[(idx + i) % 7];
    const next = hours[d]?.[0];
    if (next) return { open: false, text: `Fermé · ouvre ${i === 1 ? 'demain' : ''} à ${fr(next.open)}`.replace('  ', ' ') };
  }
  return { open: false, text: 'Fermé' };
}

function initOpenStatus() {
  const els = document.querySelectorAll<HTMLElement>('.open-status');
  if (!els.length) return;
  const update = () => {
    els.forEach((el) => {
      const hours = JSON.parse(el.dataset.hours || '{}') as Hours;
      const s = statusFor(hours);
      const txt = el.querySelector('.status-text');
      const dot = el.querySelector<HTMLElement>('.status-dot');
      if (txt) txt.textContent = s.text;
      if (dot) {
        dot.classList.toggle('bg-amber', s.open);
        dot.classList.toggle('pulse-dot', s.open);
        dot.classList.toggle('bg-cream/40', !s.open);
      }
    });
    const { day } = parisNow();
    document.querySelectorAll<HTMLElement>('.hours-row').forEach((r) => {
      r.dataset.today = String(r.dataset.day === day);
    });
  };
  update();
  setInterval(update, 60_000);
}

function initHeader() {
  const header = document.getElementById('site-header');
  const bar = document.getElementById('mobile-bar');
  const footer = document.querySelector('footer');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (header) header.dataset.scrolled = String(y > 24);
      if (bar) {
        const nearFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight - 40 : false;
        bar.dataset.show = String(y > window.innerHeight * 0.7 && !nearFooter);
      }
      // subtle parallax
      if (!reduceMotion()) {
        document.querySelectorAll<HTMLElement>('.parallax, .hero-media').forEach((el) => {
          const r = el.getBoundingClientRect();
          const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
          el.style.transform = `translate3d(0, ${(p * -24).toFixed(1)}px, 0) scale(1.08)`;
        });
      }
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileNav() {
  const btn = document.getElementById('menu-toggle');
  const panel = document.getElementById('mobile-nav');
  if (!btn || !panel) return;
  const set = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    panel.dataset.open = String(open);
    document.documentElement.style.overflow = open ? 'hidden' : '';
    // Wait until the panel is no longer visibility:hidden, otherwise focus() is ignored.
    if (open) setTimeout(() => panel.querySelector<HTMLElement>('a')?.focus(), 60);
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      set(false);
      btn.focus();
    }
  });
  window.matchMedia('(min-width: 1280px)').addEventListener('change', (e) => e.matches && set(false));
}

function initReveals() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window) || reduceMotion()) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const pending = new Set(els);
  const reveal = (el: Element) => {
    el.classList.add('is-in');
    pending.delete(el as HTMLElement);
    io.unobserve(el);
  };
  const io = new IntersectionObserver(
    (entries) => {
      // Reveal what enters the viewport, and anything already scrolled past
      // (jump links / fast scrolls can skip an element entirely).
      entries.forEach((e) => {
        if (e.isIntersecting || e.boundingClientRect.bottom < 0) reveal(e.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  els.forEach((el) => io.observe(el));

  // Safety net: on scroll, reveal anything whose top is above the bottom of the viewport.
  let queued = false;
  const sweep = () => {
    queued = false;
    pending.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
    });
    if (!pending.size) window.removeEventListener('scroll', onScroll);
  };
  const onScroll = () => {
    if (!queued) {
      queued = true;
      setTimeout(sweep, 150);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('hashchange', sweep);
}

function initMenuSpy() {
  const chips = document.querySelectorAll<HTMLAnchorElement>('.menu-chip');
  const sections = document.querySelectorAll<HTMLElement>('[data-menu-cat]');
  if (!chips.length || !sections.length) return;
  let current = '';
  const activate = (id: string) => {
    if (id === current) return;
    current = id;
    chips.forEach((c) => {
      const on = c.dataset.cat === id;
      c.setAttribute('aria-current', String(on));
      if (on) {
        const list = c.closest('ul');
        if (list) {
          const left = c.offsetLeft - list.clientWidth / 2 + c.clientWidth / 2;
          list.scrollTo({ left, behavior: reduceMotion() ? 'auto' : 'smooth' });
        }
      }
    });
  };
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) activate((e.target as HTMLElement).dataset.menuCat || '');
      });
    },
    { rootMargin: '-35% 0px -60% 0px' },
  );
  sections.forEach((s) => io.observe(s));
}

function initMap() {
  const btn = document.getElementById('map-load');
  const slot = document.getElementById('map-slot');
  if (!btn || !slot) return;
  btn.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = slot.dataset.src || '';
    iframe.title = 'Carte OpenStreetMap — Mets-toi bien, Antony';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer';
    iframe.className = 'h-full w-full border-0 [filter:grayscale(.3)_contrast(1.05)]';
    slot.replaceChildren(iframe);
  });
}

export function initSite() {
  initHeader();
  initMobileNav();
  initReveals();
  initMenuSpy();
  initOpenStatus();
  initMap();
}
