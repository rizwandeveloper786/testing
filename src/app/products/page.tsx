import ProductList from '@/components/sections/ProductList/ProductList';
import { fetchProducts } from '@/lib/api/products';

export const metadata = {
  title: 'Shifaveda - Products',
  description: 'Explore our range of Ayurvedic medicines',
};

export default async function ProductsPage() {
  const products = await fetchProducts();
  return <ProductList products={products} />;
}