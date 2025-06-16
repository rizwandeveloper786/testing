import './globals.css';
import { Inter, Noto_Serif_Devanagari } from 'next/font/google';
import Header from '@/components/sections/Header/Header';
import Footer from '@/components/sections/Footer/Footer';
import ClientWrapper from '@/components/sections/ClientWrapper/ClientWrapper';
import Navbar from '@/components/sections/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });
const noto = Noto_Serif_Devanagari({ subsets: ['devanagari'], weight: '400' });

export const metadata = {
  title: 'Shifaveda - Ayurvedic Medicines',
  description: 'Discover authentic Ayurvedic products at Shifaveda',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${noto.className}`}>
        <Header />
        <Navbar />
        <ClientWrapper>
          <main className="min-h-screen">{children}</main>
        </ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}