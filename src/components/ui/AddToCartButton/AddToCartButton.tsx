// 'use client';

//   import { useCartStore } from '@/lib/hooks/useCart';
//   import Button from '@/components/ui/Button';
//   import { Product } from '@/types/product';

//   interface AddToCartButtonProps {
//     product: Product;
//   }

//   export default function AddToCartButton({ product }: AddToCartButtonProps) {
//     const addToCart = useCartStore((state) => state.addToCart);

//     return (
//       <Button
//         className="mt-6"
//         variant="primary"
//         onClick={() => addToCart(product)}
//       >
//         Add to Cart
//       </Button>
//     );
//   }

'use client';

  import { useCartStore } from '@/lib/hooks/useCart';
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
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    );
  }