import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Button from '@/components/Button';

const ITEMS = [
  {
    icon: '/icon_lunch.svg',
    label: 'Morning',
  },
  {
    icon: '/icon_lunch.svg',
    label: 'Lunch',
  },
  {
    icon: '/icon_lunch.svg',
    label: 'Dinner',
  },
  {
    icon: '/icon_cup.svg',
    label: 'Snack',
  },
];

const PHOTO_ITEMS = [
  {
    photo: '/images/m01.jpg',
    label: '05.21.Morning',
    url: '#',
  },
  {
    photo: '/images/l03.jpg',
    label: '05.21.Lunch',
    url: '#',
  },
  {
    photo: '/images/d01.jpg',
    label: '05.21.Dinner',
    url: '#',
  },
  {
    photo: '/images/l01.jpg',
    label: '05.21.Snack',
    url: '#',
  },
  {
    photo: '/images/m01.jpg',
    label: '05.21.Morning',
    url: '#',
  },
  {
    photo: '/images/l02.jpg',
    label: '05.21.Lunch',
    url: '#',
  },
  {
    photo: '/images/d02.jpg',
    label: '05.21.Dinner',
    url: '#',
  },
  {
    photo: '/images/s01.jpg',
    label: '05.21.Snack',
    url: '#',
  },
];

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image
            src='/images/d01.jpg'
            alt='Vercel Logo'
            className='dark:invert'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className={styles.right}>Chart</div>
      </div>
      <main className={`flex min-h-screen flex-col ${styles.main}`}>
        <div className={styles.row_items}>
          {ITEMS.map((item, index) => (
            <div key={index} className={styles.box}>
              <Image src={item.icon} alt='' width={56} height={56} priority />
              <span className={styles.title}>{item.label}</span>
            </div>
          ))}
        </div>

        <div className='mb-32 grid text-center xl:mb-0 xl:grid-cols-4 xl:text-left'>
          {PHOTO_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className={styles.photo_item}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
                src={item.photo}
                alt='Next.js Logo'
                layout='fill'
                objectFit='cover'
                priority
              />
              <h2 className={styles.label}>{item.label}</h2>
            </a>
          ))}
        </div>
      <Button />
      </main>
    </>
  );
}
