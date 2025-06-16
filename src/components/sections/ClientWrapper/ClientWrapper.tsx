'use client';

import { useInitializeCart } from '@/lib/hooks/useCart'; // सही पथ
import { ReactNode } from 'react';

export default function ClientWrapper({
  children,
}: {
  children: ReactNode;
}) {
  useInitializeCart();
  return <>{children}</>;
}