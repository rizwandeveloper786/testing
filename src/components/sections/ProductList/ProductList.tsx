import Card from '@/components/ui/Card/Card';
import { Product } from '@/types/product';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products = [] }: ProductListProps) {
  return (
    <div className="container m-aut">
      <h2 className="text-2xl bg-red-400 font-bold text-shifavedaGreen text-center py-3 ">Our Products</h2>
      
      {/* Flex container with left + right content */}
      <div className="flex gap-4 mx-5">
        
        {/* Left: Category Section */}
        <div className="w-72 bg-amber-300 p-4">
          <h1 className="font-semibold">This is left side Block</h1>
        </div>

        {/* Right: Cards Grid - take full remaining width */}
        <div className="flex-1">
          <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
