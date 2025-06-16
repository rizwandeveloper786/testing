import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  product: Product;
}

export default function Card({ product }: CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-shifavedaGreen font-bold">₹{product.price}</p>
      <Link href={`/products/${product.slug}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
}