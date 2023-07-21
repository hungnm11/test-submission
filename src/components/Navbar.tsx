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
    url: '/',
  },
  {
    icon: '/icon_info.svg',
    label: 'お知らせ',
    url: '/',
  },
];

const Navbar = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isShowMenu, setIsShowMenu] = React.useState<boolean>(false);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsShowMenu(false);
    }
  };

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShowMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const openMenuToggle = () => {
    console.log('test');
    setIsShowMenu(!isShowMenu);
  };

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
          <ul className='flex relative'>
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

            <div className='mr-0' ref={ref}>
              <div className={styles.menu_label} onClick={openMenuToggle}>
                <Image
                  src={isShowMenu ? '/icon_close.svg' : '/icon_menu.svg'}
                  alt='Healthy Logo'
                  width={32}
                  height={32}
                  priority
                />
              </div>
            </div>
            <ul
              className={`${styles.menu_dropdown} ${
                isShowMenu ? '' : 'hidden'
              }`}
            >
              <li className=''>
                <Link href="/page_1" className={styles.menu_dropdown_items}>自分の記録</Link>
              </li>
              <li className=''>
                <div className={styles.menu_dropdown_items}>体重グラフ</div>
              </li>
              <li className=''>
                <div className={styles.menu_dropdown_items}>目標</div>
              </li>
              <li className=''>
                <div className={styles.menu_dropdown_items}>選択中のコース</div>
              </li>
              <li className=''>
                <Link href="/page_2" className={styles.menu_dropdown_items}>コラム一覧</Link>
              </li>
              <li className=''>
                <div className={styles.menu_dropdown_items}>設定</div>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
