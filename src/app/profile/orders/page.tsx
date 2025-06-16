// src/app/profile/orders/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { fetchOrders } from '@/lib/api/orders';
import { useAuth } from '@/lib/hooks/useAuth';
import { Order } from '@/types/order'; // Order टाइप आयात करें

export default function OrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const userOrders = await fetchOrders(user.id);
          setOrders(userOrders);
        } catch (error) {
          console.error('Failed to load orders:', error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [user]);

  if (!user) {
    return <div className="container mx-auto p-4">Please log in to view your orders.</div>;
  }

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-shifavedaGreen">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="mt-4">You have no orders yet.</p>
      ) : (
        <div className="mt-4 grid gap-4">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded-md">
              <p>Order ID: {order.id}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <p>Total: ₹{order.total.toFixed(2)}</p>
              <p>Status: {order.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}