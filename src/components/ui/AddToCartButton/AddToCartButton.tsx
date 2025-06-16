// src/components/ui/AddToCartButton/AddToCartButton.tsx
'use client';

import { useCartStore } from '@/lib/hooks/useCartStore';
import Button from '@/components/ui/Button/Button';
import { Product } from '@/types/product';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Button
      className="mt-6"
      variant="primary"
      onClick={() =>
        addToCart({
          ...product, // Product ki saari properties copy karo
          quantity: 1, // quantity add karo
        })
      }
    >
      Add to Cart
    </Button>
  );
}