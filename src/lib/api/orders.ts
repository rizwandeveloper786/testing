// src/lib/api/orders.ts
import { Order } from '@/types/order';

export async function fetchOrders(userId: string): Promise<Order[]> {
  console.log(`Fetching orders for user: ${userId}`);
  // Dummy data - Replace with real API call
  return [
    {
      id: 'order1',
      date: '2024-06-14',
      total: 1599.99,
      status: 'Delivered',
    },
    {
      id: 'order2',
      date: '2024-06-10',
      total: 899.5,
      status: 'Processing',
    },
  ];
}