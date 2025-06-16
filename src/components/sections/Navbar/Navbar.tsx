import Link from 'next/link';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import styles from './Navbar.module.css';
import Image from 'next/image'; // Import Image from next/image

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className='text-white'>ShifaVeda</Link>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.shopLink}>
          <Link href="/shop" className={styles.linkItems}>
            <Image 
              src="/images/shop.webp" 
              alt="Shop" 
              className={styles.shopIcon} 
              width={50} // Set width for the image
              height={50} // Set height for the image
            />
            <p>Shop</p>
          </Link>
        </li>
        <li className={styles.dropdownContainer}>
          <Link href="/products" className={styles.linkItems}>
            <Image 
              src="/images/shop.webp" 
              alt="Shop" 
              className={styles.shopIcon} 
              width={50} 
              height={50} 
            />
            <p>All Products</p>
          </Link>

          <ul className={styles.dropdown}>
            <li>
              <Link href="/products/skin-care-hair-care">
                Skin Care & Hair Care
              </Link>
            </li>
            <li>
              <Link href="/products/weight-power">Weight & Power</Link>
            </li>
            <li>
              <Link href="/products/daily-intimate">Daily Intimate</Link>
            </li>
            <li>
              <Link href="/products/daily-health">Daily Health</Link>
            </li>
            <li>
              <Link href="/products/combos">Combos</Link>
            </li>
            <li>
              <Link href="/products/best-sellers">Best Sellers</Link>
            </li>
            <li>
              <Link href="/products/last-longer">Last Longer</Link>
            </li>
            <li>
              <Link href="/products/better-erections">Better Erections</Link>
            </li>
            <li>
              <Link href="/products/condoms-lubes">Condoms & Lubes</Link>
            </li>
            <li>
              <Link href="/products/perfumes">Perfumes</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/category" className={styles.linkItems}>
            <Image 
              src="/images/shop.webp" 
              alt="Shop" 
              className={styles.shopIcon} 
              width={50} 
              height={50} 
            />
            <p>Category</p>
          </Link>
        </li>
        <li>
          <Link href="/combos" className={styles.linkItems}>
            <Image 
              src="/images/shop.webp" 
              alt="Shop" 
              className={styles.shopIcon} 
              width={50} 
              height={50} 
            />
            <p>Combos</p>
          </Link>
        </li>
        <li>
          <Link href="/best-sellers" className={styles.linkItems}>
            <Image 
              src="/images/shop.webp" 
              alt="Shop" 
              className={styles.shopIcon} 
              width={50} 
              height={50} 
            />
            <p>Best Sellers</p>
          </Link>
        </li>
        <li>
          <Link href="/blogs" className={styles.linkItems}>
            <Image 
              src="/images/shop.webp" 
              alt="Shop" 
              className={styles.shopIcon} 
              width={50} 
              height={50} 
            />
            <p>Blogs</p>
          </Link>
        </li>
      </ul>
      <div className={styles.icons}>
        <li>
          <Link href="/login" className={styles.icon}>
            <FaUser className={styles.size} />
          </Link>
        </li>

        <li>
          <Link href="/search" className={styles.icon}>
            <FaSearch className={styles.size} />
          </Link>
        </li>

        <li>
          <Link href="/cart" className={styles.icon}>
            <FaShoppingCart className={styles.size} />
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
