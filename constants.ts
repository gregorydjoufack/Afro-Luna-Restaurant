import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Entrées
  {
    id: 'e1',
    name: 'Aloco & Sauce Piment',
    description: 'Bananes plantains frites servies avec une sauce maison légèrement épicée.',
    price: 8,
    category: 'entrées',
    image: 'https://picsum.photos/400/300?random=1',
    vegan: true
  },
  {
    id: 'e2',
    name: 'Accras de Morue',
    description: 'Beignets croustillants à la morue, herbes fraîches et pointe de citron vert.',
    price: 10,
    category: 'entrées',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 'e3',
    name: 'Velouté de Patate Douce',
    description: 'Crème onctueuse au lait de coco et gingembre.',
    price: 9,
    category: 'entrées',
    image: 'https://picsum.photos/400/300?random=3',
    vegan: true
  },
  // Plats
  {
    id: 'p1',
    name: 'Poulet Moambe',
    description: 'Poulet mijoté dans une sauce à la noix de palme (Moambe), servi avec riz et saka-saka.',
    price: 22,
    category: 'plats',
    image: 'https://picsum.photos/400/300?random=4',
    popular: true
  },
  {
    id: 'p2',
    name: 'Mafé Bœuf',
    description: 'Ragoût de bœuf tendre dans une sauce onctueuse à l\'arachide.',
    price: 21,
    category: 'plats',
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: 'p3',
    name: 'Yassa au Poisson',
    description: 'Filet de capitaine mariné au citron vert, oignons caramélisés et moutarde.',
    price: 24,
    category: 'plats',
    image: 'https://picsum.photos/400/300?random=6'
  },
  {
    id: 'p4',
    name: 'Thieboudienne Royal',
    description: 'Le plat national du Sénégal : riz, poisson et légumes mijotés.',
    price: 26,
    category: 'plats',
    image: 'https://picsum.photos/400/300?random=7',
    popular: true
  },
  // Desserts
  {
    id: 'd1',
    name: 'Mousse Mangue-Passion',
    description: 'Légèreté fruitée avec un crumble de manioc.',
    price: 9,
    category: 'desserts',
    image: 'https://picsum.photos/400/300?random=8'
  },
  {
    id: 'd2',
    name: 'Thiaca',
    description: 'Couscous de mil au yaourt vanillé et muscade.',
    price: 8,
    category: 'desserts',
    image: 'https://picsum.photos/400/300?random=9'
  },
  // Cocktails
  {
    id: 'c1',
    name: 'Afro Luna Signature',
    description: 'Rhum brun, jus de bissap, gingembre et citron vert.',
    price: 12,
    category: 'cocktails',
    image: 'https://picsum.photos/400/300?random=10',
    popular: true
  },
  {
    id: 'c2',
    name: 'Mojito Baobab',
    description: 'La fraîcheur de la menthe alliée à la douceur du fruit du baobab.',
    price: 11,
    category: 'cocktails',
    image: 'https://picsum.photos/400/300?random=11'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sophie M.',
    rating: 5,
    text: "Une expérience culinaire incroyable ! Le Poulet Moambe est à tomber.",
    date: '2023-10-15'
  },
  {
    id: 'r2',
    author: 'Jean-Pierre D.',
    rating: 5,
    text: "L'ambiance est chaleureuse et le service impeccable. On se sent comme à la maison.",
    date: '2023-11-02'
  },
  {
    id: 'r3',
    author: 'Amina K.',
    rating: 4,
    text: "Très bons cocktails et musique d'ambiance parfaite.",
    date: '2023-12-10'
  }
];