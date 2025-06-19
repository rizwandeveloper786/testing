import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  product: Product;
}

export default function Card({ product }: CardProps) {
  return (
    <div className="flex justify-center mx-1">
      <div className="flex flex-col justify-between rounded-lg p-4 m-2 w-full max-w-xs bg-white shadow-2xl hover:shadow-lg transition-shadow min-h-[300px]">

        {/* Image */}
        <div className="flex justify-center mb-4 h-60 w-60">
          <Image
            src={product.image}
            alt={product.name}
            width={256}
            height={256}
            className=" object-cover rounded"
          />
        </div>

        {/* Product Info */}
        <div className="mb-2 px-2">
          <div className="flex flex-row justify-between mb-1">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-shifavedaGreen font-bold">₹{product.price}</p>
          </div>
          <p className="text-gray-600 text-sm">{product.description}</p>
        </div>

        {/* Link */}
        {/* View Details Link */}
        <div className="px-2 mb-1">
          <Link href={`/products/${product.slug}`} className="text-blue-500 hover:underline">
            View Details
          </Link>
        </div>

        {/* Buttons - mt-auto removed */}
        <div className="flex flex-row justify-between px-2 gap-2">
          <button className="flex-1 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
            Add To Cart
          </button>
          <button className="flex-1 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
            Order
          </button>
        </div>


      </div>
    </div>
  );
}
