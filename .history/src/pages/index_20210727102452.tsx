import Head from 'next/head';
import {GetStaticPaths} from 'next'
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss'
import { stripe } from '../services/stripe';

interface HomeProps{
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
      <title>ig.news</title>
      </Head>
    <main className={styles.contentContainer}>
      <section className={styles.here}>
      <span>👏 Hey, welcome</span>
      <h1>News about the <span>React </span>world</h1>
      <p>
        Get access to all the publications <br />
        <span>for {product.amount} month</span>
      </p>
      <SubscribeButton priceId={product.priceId}/>
      </section>
      <img src="/images/avatar.svg" alt="girl coding" />
    </main>
    </>
  )
}

export const getStaticProps : GetStaticPaths = async () => {
 const price = await stripe.prices.retrieve('price_1JG5boKvb9iT4ev5Bs6EjKYM')

   const product = {
     priceId: price.id,
     amount: new Intl.NumberFormat('en-US',{
       style: 'currency',
       currency: 'USD',
     }).format(price.unit_amount / 100)
   }
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}