/**
 * All public facts about the restaurant live here.
 * Each field says where it was verified (see docs/RESEARCH.md).
 * Update this file, rebuild, redeploy — no layout code needs to change.
 */

export type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface OpeningSlot {
  /** 24h "HH:MM". "24:00" means midnight at the end of the day. */
  open: string;
  close: string;
}

export const restaurant = {
  name: 'METS-TOI BIEN',
  shortName: 'MTB',
  fullName: 'METS-TOI BIEN (MTB)',
  tagline: 'Smash burgers, sandwichs & riz crousty à Antony',
  description:
    'Smash burgers, sandwichs au pain maison, riz crousty et finger foods, sur place, à emporter ou en livraison, au 209 avenue de la Division Leclerc à Antony. Ouvert 7 jours sur 7.',

  // Verified: Google Maps, PagesJaunes, Uber Eats, Deliveroo, registre SIRENE (29/10/2026)
  address: {
    street: '209 avenue de la Division Leclerc',
    postalCode: '92160',
    city: 'Antony',
    region: 'Hauts-de-Seine',
    country: 'FR',
  },
  geo: { lat: 48.7380451, lng: 2.3022064 },

  // Verified: Google Maps + PagesJaunes (29/10/2026)
  phone: { display: '01 46 15 38 92', href: 'tel:+33146153892', e164: '+33146153892' },

  // Google Maps listing, confirmed by the owner (29/10/2026).
  hours: {
    mon: [{ open: '11:30', close: '24:00' }],
    tue: [{ open: '11:30', close: '24:00' }],
    wed: [{ open: '11:30', close: '24:00' }],
    thu: [{ open: '11:30', close: '24:00' }],
    fri: [{ open: '11:30', close: '24:00' }],
    sat: [{ open: '11:30', close: '24:00' }],
    sun: [{ open: '11:30', close: '24:00' }],
  } as Record<DayKey, OpeningSlot[]>,
  hoursNote:
    'Les horaires peuvent varier les jours fériés : en cas de doute, appelle-nous.',
  /** Delivery platforms list a shorter service window (last orders around 23:30). */
  deliveryHoursNote: 'Livraison via les plateformes jusqu’à 23 h 30 environ.',

  // Verified: Google Maps listing + Uber Eats + Deliveroo (29/10/2026)
  services: ['Sur place', 'À emporter', 'Livraison'],

  // Verified on Uber Eats store page (29/10/2026) — applies to Uber Eats orders.
  mealVouchersOnline: ['Pluxee', 'Up Déjeuner', 'Bimpli', 'Swile', 'Ticket Restaurant®'],

  ordering: {
    // Both links are the ones Google Maps' "Commander" button points to (29/10/2026).
    uberEats: 'https://www.ubereats.com/fr/store/mets-toi-bien/eeh8TVrrQNyxJ8iqht4NmQ',
    deliveroo: 'https://deliveroo.fr/fr/menu/paris/antony-rabats/mets-toi-bien',
  },

  links: {
    googleMaps:
      'https://www.google.com/maps/search/?api=1&query=METS-TOI%20BIEN%20(MTB)%20209%20Av.%20de%20la%20Division%20Leclerc%2092160%20Antony',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=METS-TOI%20BIEN%20(MTB)%2C%20209%20Av.%20de%20la%20Division%20Leclerc%2C%2092160%20Antony',
    googleReviews:
      'https://www.google.com/maps/search/?api=1&query=METS-TOI%20BIEN%20(MTB)%20Antony',
    // Handle shown on the storefront sign; account verified 29/10/2026.
    instagram: 'https://www.instagram.com/metstoibien_france/',
    instagramHandle: '@metstoibien_france',
    tiktok: '',
  },

  // Snapshot from Google Maps — displayed WITH its date, never as "live".
  rating: { value: 4.8, count: 198, source: 'Google', checkedOn: '2026-10-29' },

  // Recurring themes in public Google reviews (paraphrased, not quotes). See docs/RESEARCH.md.
  reviewThemes: ['les smash burgers', 'les quantités généreuses', 'l’accueil de l’équipe', 'le service rapide'],

  // Public registry (recherche-entreprises.api.gouv.fr), 29/10/2026
  legal: {
    company: 'METS TOI BIEN',
    form: 'SAS (société par actions simplifiée)',
    siren: '988 262 119',
    siret: '988 262 119 00015',
    naf: '56.10C — Restauration de type rapide',
    registeredOffice: '209 avenue de la Division Leclerc, 92160 Antony',
    rcs: 'RCS Nanterre 988 262 119',
    // Registry data (Pappers / RNE, 29/10/2026), confirmed by the owner.
    shareCapital: '1 000 €',
    publicationDirector: 'Muhammad Ghias, Président',
    vat: 'FR90 988 262 119',
    // Add a contact email when the restaurant has one (shown on the legal page).
    email: '',
  },
} as const;

export const dayLabels: Record<DayKey, string> = {
  mon: 'Lundi',
  tue: 'Mardi',
  wed: 'Mercredi',
  thu: 'Jeudi',
  fri: 'Vendredi',
  sat: 'Samedi',
  sun: 'Dimanche',
};

export const dayOrder: DayKey[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

export const schemaDay: Record<DayKey, string> = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday',
};

/** "11:30" → "11 h 30", "24:00" → "minuit" */
export function frTime(t: string): string {
  if (t === '24:00' || t === '00:00') return 'minuit';
  const [h, m] = t.split(':');
  return m === '00' ? `${Number(h)} h` : `${Number(h)} h ${m}`;
}
