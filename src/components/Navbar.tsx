// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Navbar.module.scss';

const NAVBAR = [
  {
    icon: '/icon_memo.svg',
    label: '自分の記録',
    url: '/page_1',
  },
  {
    icon: '/icon_challenge.svg',
    label: 'チャレンジ',
    url: '/page_2',
  },
  {
    icon: '/icon_info.svg',
    label: 'お知らせ',
    url: '/page_3',
  },
];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav_container}>
        <div className='flex-1'>
          <Link href='/' className={styles.logo_item}>
            <Image
              src='/logo_healthy.svg'
              alt='Healthy Logo'
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='flex'>
            {NAVBAR.map((nav) => (
              <li key={nav.label} className={styles.menu_item}>
                <Link href={nav.url} className={styles.menu_label}>
                  <Image
                    src={nav.icon}
                    alt='Healthy Logo'
                    width={32}
                    height={32}
                    priority
                  />
                  <span className={styles.title}>{nav.label}</span>
                </Link>
              </li>
            ))}

            <li className='mr-6'>
              <Link href='/page_3' className={styles.menu_label}>
                <Image
                  src='/icon_menu.svg'
                  alt='Healthy Logo'
                  width={32}
                  height={32}
                  priority
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
