import styles from './styles.module.scss'
import Head from 'next/head';


export function Header() {
    return (
        <>
            <Head>
                <title>Posts | ig.news</title>
            </Head>

            <main>
                <div>
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