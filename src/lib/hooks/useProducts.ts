// src/lib/hooks/useProducts.ts
import { useState, useEffect } from 'react';
import { fetchProducts } from '@/lib/api/products';
import { Product } from '@/types/product';

export function useProducts(query?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const data = await fetchProducts(query);
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products: ' + (error instanceof Error ? error.message : 'Unknown error'));
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [query]);

  return { products, loading, error };
}