import React from 'react';
import styles from '@/styles/Page_2.module.scss';
import Image from 'next/image';

const RECOMMAND_ITEMS = [
  {
    photo: '/images/m01.jpg',
    label: 'RECOMMENDED COLUMN',
    desc: 'オススメ',
    url: '#',
  },
  {
    photo: '/images/l03.jpg',
    label: 'RECOMMENDED DIET',
    desc: 'ダイエット',
    url: '#',
  },
  {
    photo: '/images/d01.jpg',
    label: 'RECOMMENDED BEAUTY',
    desc: '美容',
    url: '#',
  },
  {
    photo: '/images/l01.jpg',
    label: 'RECOMMENDED HEALTH',
    desc: '健康',
    url: '#',
  },
];

const PHOTO_ITEMS = [
  {
    photo: '/images/m01.jpg',
    label: '2021.05.17   23:25',
    title: '#魚料理  #和食  #DHA',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    url: '#',
  },
  {
    photo: '/images/l03.jpg',
    label: '2021.05.17   23:25',
    title: '#魚料理  #和食  #DHA',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    url: '#',
  },
  {
    photo: '/images/d01.jpg',
    label: '2021.05.17   23:25',
    title: '#魚料理  #和食  #DHA',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    url: '#',
  },
  {
    photo: '/images/l01.jpg',
    label: '2021.05.17   23:25',
    title: '#魚料理  #和食  #DHA',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    url: '#',
  },
  {
    photo: '/images/m01.jpg',
    label: '2021.05.17   23:25',
    title: '#魚料理  #和食  #DHA',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    url: '#',
  },
  {
    photo: '/images/l02.jpg',
    label: '2021.05.17   23:25',
    title: '#魚料理  #和食  #DHA',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    url: '#',
  },
  {
    photo: '/images/d02.jpg',
    label: '2021.05.17   23:25',
    title: '#魚料理  #和食  #DHA',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    url: '#',
  },
  {
    photo: '/images/s01.jpg',
    label: '2021.05.17   23:25',
    title: '#魚料理  #和食  #DHA',
    description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    url: '#',
  },
];

const Page_2 = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.recommand}`}>
        {RECOMMAND_ITEMS.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className={styles.recommend_item}
            target='_blank'
            rel='noopener noreferrer'
          >
                <h2 className={styles.label}>{item.label}</h2>
                <hr className={styles.line} />
                <h2 className={styles.desc}>{item.desc}</h2>
          </a>
        ))}
      </div>
      <div className='mb-32 grid text-center xl:mb-0 xl:grid-cols-4 xl:text-left'>
        {PHOTO_ITEMS.map((item, index) => (
          <div key={index}>
            <div className={styles.photo_item}>
              <Image
                className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
                src={item.photo}
                alt='Next.js Logo'
                layout='fill'
                objectFit='cover'
                priority
              />
              <h2 className={styles.label}>{item.label}</h2>
            </div>
            <div className={styles.content}>{item.description}</div>
            <a href='' rel='noopener noreferrer' className={styles.title}>
              {item.title}
            </a>
          </div>
        ))}
      </div>
      <div className='flex w-full items-end justify-center'>
        <a
          className={styles.button}
          href='#'
          target='_blank'
          rel='noopener noreferrer'
        >
          記録をもっと見る
        </a>
      </div>
    </main>
  );
};
export default Page_2;
