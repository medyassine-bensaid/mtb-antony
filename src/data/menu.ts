/**
 * MTB menu — structured data.
 *
 * SOURCE: Uber Eats and Deliveroo store pages, read on 29/10/2026.
 * Both platforms showed identical names, descriptions and prices,
 * confirmed by the owner on 29/10/2026.
 *
 * To update: edit an item, rebuild, redeploy. Prices are in euro cents
 * to avoid rounding issues. `image` is optional: the file name (without
 * extension) of a photo in /public/images/menu/ (NAME.webp + NAME-sm.webp).
 * Photos: MTB's own promo images from its Uber Eats store, used with the owner's permission.
 */

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  /** Price in euro cents. Omit when the price depends on the choice. */
  price?: number;
  priceNote?: string;
  /** Shown as a small label. Only use facts (e.g. "pimenté" when the description says so). */
  tags?: string[];
  /** Photo name in /public/images/menu/ (without extension). */
  image?: string;
  /** True when the photo shows the menu version (with fries and drink). */
  imageIsMenu?: boolean;
  /** Featured on the homepage "Incontournables" section. */
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  short: string;
  intro?: string;
  items: MenuItem[];
}

export const menuMeta = {
  source: 'Uber Eats et Deliveroo',
  checkedOn: '2026-10-29',
  priceDisclaimer:
    'Prix TTC en euros, susceptibles d’évoluer.',
  allergenNote:
    'Allergènes : la liste détaillée est disponible sur demande au comptoir. Signale toute allergie avant de commander.',
  menuIncludes: 'Les menus comprennent des frites et une boisson 33 cl.',
};

export const menu: MenuCategory[] = [
  {
    id: 'smash',
    name: 'Smash burgers',
    short: 'Smash',
    intro: 'Potato bun, steak smash, sauce maison. Seul ou en menu.',
    items: [
      {
        id: 'smash-classique', image: 'smash-classique',
        name: 'Smash Classique',
        description: 'Potato bun, steak smash, cornichons, crudités, sauce maison.',
        price: 820,
        priceNote: 'Menu 11,90 €',
        featured: true,
      },
      {
        id: 'smash-bacon', image: 'smash-bacon', imageIsMenu: true,
        name: 'Smash Bacon',
        description: 'Potato bun, bacon, steak smash, oignons caramélisés, crudités, sauce maison.',
        price: 1190,
        priceNote: 'Menu 14,90 €',
      },
      {
        id: 'smash-avocado', image: 'smash-avocado',
        name: 'Smash Avocado',
        description: 'Potato bun, steak smash, purée d’avocat, crudités, sauce maison.',
        price: 1090,
        priceNote: 'Menu 14,90 €',
      },
      {
        id: 'smash-chicken', image: 'smash-chicken', imageIsMenu: true,
        name: 'Smash Chicken',
        description: 'Potato bun, poulet croustillant, cornichons, crudités, sauce maison.',
        price: 890,
        priceNote: 'Menu 12,90 €',
      },
      {
        id: 'smash-mix', image: 'smash-mix', imageIsMenu: true,
        name: 'Smash Mix',
        description: 'Potato bun, steak et poulet croustillant, cornichons, crudités, sauce maison.',
        price: 1190,
        priceNote: 'Menu 14,90 €',
      },
      {
        id: 'smash-honey', image: 'smash-honey', imageIsMenu: true,
        name: 'Smash Honey',
        description: 'Potato bun, double steak smash, chèvre fondu, miel, sauce honey.',
        price: 1090,
        priceNote: 'Menu 14,90 €',
      },
      {
        id: 'smash-raclette',
        name: 'Smash Raclette',
        description: 'Potato bun, raclette, double steak smash, jambon de dinde, crudités, sauce maison.',
        price: 1090,
        priceNote: 'Menu 14,90 €',
      },
    ],
  },
  {
    id: 'sandwichs',
    name: 'Sandwichs',
    short: 'Sandwichs',
    intro: 'Sur pain maison. Seul ou en menu.',
    items: [
      {
        id: 'le-red', image: 'le-red', imageIsMenu: true,
        name: 'Le Red',
        description: 'Pain maison, poulet tandoori, cheddar, sauce tandoori, crudités.',
        price: 1090,
        priceNote: 'Menu 14,90 €',
        tags: ['Tandoori'],
      },
      {
        id: 'le-yellow', image: 'le-yellow', imageIsMenu: true,
        name: 'Le Yellow',
        description: 'Pain maison, poulet au curry, olives, sauce curry, crudités.',
        price: 1090,
        priceNote: 'Menu 14,90 €',
        tags: ['Curry'],
      },
      {
        id: 'el-guzman', image: 'el-guzman', imageIsMenu: true,
        name: 'El Guzman',
        description: 'Pain maison, poulet mariné à la sauce mexicaine, poivrons, crudités.',
        price: 1190,
        priceNote: 'Menu 15,90 €',
        tags: ['Mexicain'],
      },
      {
        id: 'le-supreme', image: 'le-supreme', imageIsMenu: true,
        name: 'Le Suprême',
        description: 'Pain maison, escalope de poulet, sauce fromagère, cheddar, crudités.',
        price: 1190,
        priceNote: 'Menu 14,90 €',
        featured: true,
      },
      {
        id: 'le-triple-mtb', image: 'le-triple-mtb', imageIsMenu: true,
        name: 'Le Triple MTB',
        description: 'Pain maison, triple steak, œuf, bacon, cheddar, crudités.',
        price: 1190,
        priceNote: 'Menu 14,90 €',
        featured: true,
      },
      {
        id: 'le-mix-up', image: 'le-mix-up', imageIsMenu: true,
        name: 'Le Mix Up',
        description: 'Poulet tandoori, steak haché, cheddar, sauce, crudités.',
        priceNote: 'Menu 15,90 €',
      },
    ],
  },
  {
    id: 'crousty',
    name: 'Riz crousty',
    short: 'Crousty',
    intro: 'Le tasty crousty : base au choix, préparation au choix.',
    items: [
      {
        id: 'crousty-au-choix', image: 'crousty-au-choix',
        name: 'Crousty au choix',
        description: 'Tasty crousty : base au choix et préparation au choix.',
        price: 1190,
        featured: true,
      },
      { id: 'crousty-tandoori', name: 'Crousty tandoori', price: 1190, tags: ['Tandoori'] },
      { id: 'crousty-cordon-bleu', name: 'Crousty cordon bleu', price: 1190 },
    ],
  },
  {
    id: 'finger',
    name: 'Finger foods',
    short: 'Finger',
    items: [
      { id: 'nuggets', name: 'Nuggets', description: 'Nuggets de poulet panés, croustillants dehors, tendres dedans.', price: 590 },
      { id: 'tenders', image: 'tenders', name: 'Tenders', description: 'Filets de poulet panés et croustillants.', price: 690 },
      { id: 'mozzarella-sticks', image: 'mozzarella-sticks', name: 'Mozzarella sticks', description: 'Bâtonnets de mozzarella panés, croustillants et fondants.', price: 590 },
      { id: 'jalapenos', name: 'Jalapeños', description: 'Jalapeños panés, croustillants et pimentés.', price: 590, tags: ['Pimenté'] },
      { id: 'onion-rings', image: 'onion-rings', name: 'Onion rings', description: 'Rondelles d’oignons en beignets croustillants.', price: 590 },
    ],
  },
  {
    id: 'frites',
    name: 'Frites',
    short: 'Frites',
    intro: 'Classiques ou twister, nature ou nappées.',
    items: [
      { id: 'frites-nature', name: 'Frites nature', description: 'Classiques, dorées et croustillantes.', price: 400 },
      { id: 'frites-cheddar', name: 'Frites cheddar', description: 'Nappées de sauce cheddar.', price: 450 },
      { id: 'frites-cheddar-oignons', name: 'Frites cheddar & oignons crispy', description: 'Cheddar fondu et oignons croustillants.', price: 500 },
      { id: 'frites-cheddar-bacon', name: 'Frites cheddar & bacon', description: 'Cheddar et éclats de bacon.', price: 550 },
      { id: 'twister-nature', name: 'Twister nature', description: 'Frites twister, croustillantes et dorées.', price: 450 },
      { id: 'twister-cheddar', name: 'Twister cheddar', description: 'Frites twister nappées de cheddar fondant.', price: 550 },
      { id: 'twister-cheddar-bacon', name: 'Twister cheddar & bacon', description: 'Cheddar fondant et éclats de bacon.', price: 650 },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    short: 'Desserts',
    items: [
      { id: 'tiramisu-classique', name: 'Tiramisu classique', description: 'Biscuits imbibés de café, crème mascarpone. Parfum au choix.', price: 410 },
      { id: 'tiramisu-fruite', name: 'Tiramisu fruité', description: 'Biscuit émietté, crème légère, coulis de fruits au choix.', price: 490 },
      { id: 'tarte-daim', name: 'Tarte au Daim', description: 'Base biscuitée, caramel, chocolat, éclats de Daim.', price: 420 },
    ],
  },
  {
    id: 'enfant',
    name: 'Menu enfant',
    short: 'Enfant',
    items: [
      {
        id: 'menu-enfant',
        name: 'Menu enfant',
        description: 'Cheeseburger ou 5 nuggets, frites, Capri-Sun et compote.',
        price: 790,
      },
    ],
  },
  {
    id: 'boissons',
    name: 'Boissons',
    short: 'Boissons',
    items: [
      {
        id: 'boisson', image: 'boisson',
        name: 'Boisson au choix',
        description: 'Sélection de boissons fraîches — demande la liste au comptoir.',
        priceNote: 'Prix selon la boisson',
      },
    ],
  },
];

export function formatPrice(cents?: number): string {
  if (cents === undefined) return '';
  return (cents / 100).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
}

export const minPrice = Math.min(...menu.flatMap((c) => c.items.map((i) => i.price ?? Infinity)));
export const maxPrice = Math.max(...menu.flatMap((c) => c.items.map((i) => i.price ?? 0)));
