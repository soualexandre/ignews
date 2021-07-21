import styles from '../styles/global.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
      <title>ig.news</title>
      </Head>
      <h1 className={styles.title}>Olá mundo</h1>
    </>
  )
}
