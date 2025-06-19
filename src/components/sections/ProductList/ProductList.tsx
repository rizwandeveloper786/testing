'use client';
import { useState } from 'react';
import Card from '@/components/ui/Card/Card';
import { Product } from '@/types/product';

interface ProductListProps {
  products: Product[];
}

const categories = [
  'All Products',
  'Digestion',
  'Immunity',
  'Skin & Hair',
  'Pain Relief',
  'Detox',
  'Women\'s Health',
  'Men\'s Health',
  'Diabetes Care',
  'Stress & Sleep',
];

export default function ProductList({ products = [] }: ProductListProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl bg-red-400 font-bold text-shifavedaGreen text-center py-3">
        Our Products
      </h2>

      {/* Main Content: Category Sidebar + Products */}
      <div className="flex flex-col md:flex-row gap-4 mx-5">

        {/* LEFT: Category Sidebar - Hidden on mobile */}
        <div className="hidden md:block w-72 bg-green-100 p-4 rounded-md shadow-md">
          <h3 className="font-semibold text-lg mb-3 text-shifavedaGreen">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-md transition ${
                    selectedCategory === category
                      ? 'bg-shifavedaGreen text-white font-semibold'
                      : 'hover:bg-green-200'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Product Cards */}
        <div className="flex-1">
          <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {products
              .filter((product) =>
                selectedCategory === 'All Products' ||
                product.category === selectedCategory
              )
              .map((product) => (
                <Card key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
