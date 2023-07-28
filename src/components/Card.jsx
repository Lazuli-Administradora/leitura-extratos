// components/Card.js

import styles from '../styles/Card.module.css'

export default function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

