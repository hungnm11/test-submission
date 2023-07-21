import React from 'react';
import styles from '@/styles/Button.module.scss'

const Button = () => {
  return (
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
  );
};

export default Button;
