import styles from './styles.module.scss'
import Head from 'next/head';
import { GetStaticPaths } from 'next';


export default function Header() {
    return (
        <>
            <Head>
                <title>Posts | ig.news</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>in this guide, you will learn how to create to manage multiple packeges with a shared </p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>in this guide, you will learn how to create to manage multiple packeges with a shared </p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>in this guide, you will learn how to create to manage multiple packeges with a shared </p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticsProps = async () =>{

} 