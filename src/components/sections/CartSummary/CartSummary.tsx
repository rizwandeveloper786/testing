import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils/formatPrice';
import Button from '@/components/ui/Button/Button';
import { useCartStore } from '@/lib/hooks/useCartStore';
import Link from 'next/link';

interface CartSummaryProps {
  cart: Product[];
}

export default function CartSummary({ cart }: CartSummaryProps) {
  const { removeFromCart } = useCartStore();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-4">
      {cart.length ? (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between py-2">
                <span>{item.name}</span>
                <div>
                  <span>{formatPrice(item.price)}</span>
                  <Button
                    className="ml-4 bg-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xl font-bold">Total: {formatPrice(total)}</p>
          <Link href="/checkout">
            <Button className="mt-4">Proceed to Checkout</Button>
          </Link>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}