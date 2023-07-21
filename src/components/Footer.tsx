import React from 'react';
import styles from '@/styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer_container}>
        <li>
          <a href='#' className={styles.footer_link}>
            会員登録
          </a>
        </li>
        <li>
          <a href='#' className={styles.footer_link}>
            運営会社
          </a>
        </li>
        <li>
          <a href='#' className={styles.footer_link}>
            利用規約
          </a>
        </li>
        <li>
          <a href='#' className={styles.footer_link}>
            個人情報の取扱について
          </a>
        </li>
        <li>
          <a href='#' className={styles.footer_link}>
            特定商取引法に基づく表記
          </a>
        </li>
        <li>
          <a href='#' className={styles.footer_link}>
            お問い合わせ
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
