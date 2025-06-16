import CheckoutForm from '@/components/sections/CheckoutForm/CheckoutForm';

export const metadata = {
  title: 'Shifaveda - Checkout',
  description: 'Complete your order',
};

export default function CheckoutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-shifavedaGreen">Checkout</h1>
      <CheckoutForm />
    </div>
  );
}