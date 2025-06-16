import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';

export default function CheckoutForm() {
  return (
    <form className="mt-4 space-y-4">
      <div>
        <label htmlFor="name">Full Name</label>
        <Input id="name" type="text" required />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <Input id="address" type="text" required />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <Input id="phone" type="tel" required />
      </div>
      <Button type="submit">Place Order</Button>
    </form>
  );
}