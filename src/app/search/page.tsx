import ProductList from '@/components/sections/ProductList/ProductList';
import { fetchProducts } from '@/lib/api/products';

export const metadata = {
  title: 'Shifaveda - Search',
  description: 'Search for Ayurvedic products',
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string | string[] }>; // यहाँ Promise जोड़ा
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = await searchParams; // Promise को रिजॉल्व किया
  let q = '';
  if (Array.isArray(resolvedSearchParams.q)) {
    q = resolvedSearchParams.q[0]; // अगर q एक ऐरे है, तो पहला वैल्यू लो
  } else if (typeof resolvedSearchParams.q === 'string') {
    q = resolvedSearchParams.q; // अगर q स्ट्रिंग है, तो उसे लो
  }

  const products = await fetchProducts(q);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-shifavedaGreen">Search Results</h1>
      <ProductList products={products} />
    </div>
  );
}