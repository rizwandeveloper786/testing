import Banner from '@/components/sections/Banner/Banner';
import ProductList from '@/components/sections/ProductList/ProductList';
import { fetchProducts } from '@/lib/api/products';

export const metadata = {
  title: 'Shifaveda',
  description: 'Explore authentic Ayurvedic products',
};

export default async function HomePage() {
  const products = await fetchProducts();
  return (
    <div>
      <Banner />
      <ProductList products={products} />
    </div>
  );
}