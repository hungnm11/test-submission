import React from 'react';
import styles from '@/styles/Page_1.module.scss';
import Image from 'next/image';
import Button from '@/components/Button';

const PHOTO_ITEMS = [
  {
    photo: '/images/MyRecommend-1.jpg',
    label: 'BODY RECORD',
    desc: '自分のカラダの記録',
    url: '#',
  },
  {
    photo: '/images/MyRecommend-2.jpg',
    label: 'MY EXERCISE',
    desc: '自分の運動の記録',
    url: '#',
  },
  {
    photo: '/images/MyRecommend-3.jpg',
    label: 'MY DIARY',
    desc: '自分の日記',
    url: '#',
  },
];

const DIARY_ITEMS = [
  {
    label: '05.21.Morning',
    content:
      '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    url: '#',
  },
  {
    label: '05.21.Lunch',
    content:
      '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    url: '#',
  },
  {
    label: '05.21.Dinner',
    content:
      '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    url: '#',
  },
  {
    label: '05.21.Snack',
    content:
      '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    url: '#',
  },
  {
    label: '05.21.Morning',
    content:
      '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    url: '#',
  },
  {
    label: '05.21.Lunch',
    content:
      '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    url: '#',
  },
  {
    label: '05.21.Dinner',
    content:
      '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    url: '#',
  },
  {
    label: '05.21.Snack',
    content:
      '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    url: '#',
  },
];

const Page_1 = () => {
  return (
    <main className={styles.main}>
      <div className={styles.records}>
        {PHOTO_ITEMS.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className={styles.photo_item}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className={styles.image}
              src={item.photo}
              alt='Next.js Logo'
              layout='fill'
              objectFit='cover'
              priority
            />
            <div className={styles.content}>
              <h1 className={styles.label}>{item.label}</h1>
              <h2 className={styles.description}>{item.desc}</h2>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.chart_records}>
        {/* <img src='/images/chart.jpg' alt='' width={'100%'} /> */}
      </div>

      <div className={styles.chart_records}>
        <div className={styles.header}>
          <span>MY EXERCISE</span> <span>2021.05.21</span>
        </div>
        <div className={styles.list_items}>
          <div className={styles.list_items_column}>
            <ul className=' flex flex-col divide-y divide-gray-200 dark:divide-gray-700'>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.list_items_column}>
            <ul className=' flex flex-col divide-y divide-gray-200 dark:divide-gray-700'>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い)</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
              <li className={styles.row}>
                <div>
                  <span className={styles.label}>家事全般（立位・軽い</span>
                  <span className={styles.desc}>26kcal</span>
                </div>
                <div>
                  <span className={styles.desc}>10 min</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.my_diary}>
        <div className='mb-32 grid text-center xl:mb-0 xl:grid-cols-4 xl:text-left'>
          {DIARY_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className={styles.content_item}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className={styles.header}>
                <span>2021.05.21 </span> <span> 23:25</span>
              </div>
              <h2 className={styles.label}>{item.content}</h2>
            </a>
          ))}
        </div>
      </div>
      <Button />
    </main>
  );
};
export default Page_1;
