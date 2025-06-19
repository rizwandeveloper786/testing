import { Product } from '@/types/product';

const products: Product[] = [
  {
    id: '1',
    slug: 'shifa-churna',
    name: 'Shifa Churna',
    price: 250,
    image: '/images/Majoon.jpg',
    description: 'Ayurvedic churna for digestion',
    category: 'Churna',
  },
  {
    id: '2',
    slug: 'shifa-oil',
    name: 'Shifa Oil',
    price: 350,
    image: '/images/Majoon.jpg',
    description: 'Ayurvedic oil for pain relief',
    category: 'Oil',
  },
  {
    id: '3',
    slug: 'shifa-oil',
    name: 'Shifa Oil',
    price: 350,
    image: '/images/Majoon.jpg',
    description: 'Ayurvedic oil for pain relief',
    category: 'Oil',
  },
  {
    id: '4',
    slug: 'shifa-oil',
    name: 'Shifa Oil',
    price: 350,
    image: '/images/Majoon.jpg',
    description: 'Ayurvedic oil for pain relief',
    category: 'Oil',
  },
  {
    id: '5',
    slug: 'shifa-oil',
    name: 'Shifa Oil',
    price: 350,
    image: '/images/Majoon.jpg',
    description: 'Ayurvedic oil for pain relief',
    category: 'Oil',
  },
  {
    id: '6',
    slug: 'shifa-oil',
    name: 'Shifa Oil',
    price: 350,
    image: '/images/Majoon.jpg',
    description: 'Ayurvedic oil for pain relief',
    category: 'Oil',
  },
  {
    id: '7',
    slug: 'shifa-oil',
    name: 'Shifa Oil',
    price: 350,
    image: '/images/Majoon.jpg',
    description: 'Ayurvedic oil for pain relief',
    category: 'Oil',
  },
];

export async function fetchProducts(q?: string): Promise<Product[]> {
  if (!q) return products;
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.description.toLowerCase().includes(q.toLowerCase()) ||
    p.category.toLowerCase().includes(q.toLowerCase())
  );
  return filtered;
}

export async function fetchProductBySlug(slug: string): Promise<Product> {
  const product = products.find((p) => p.slug === slug);
  if (!product) throw new Error('Product not found');
  return product;
}
