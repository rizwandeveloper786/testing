import { fetchCart } from '@/lib/api/cart';

export default async function CartPage() {
  const cart = await fetchCart(); // सर्वर-साइड API कॉल

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-shifavedaGreen">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="mt-4 grid gap-4">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-md">
              <p>{item.name}</p>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}