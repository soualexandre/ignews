import styles from './styles.module.scss'
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import {RichText} from 'prismic-dom'

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

export const getStaticProps: GetStaticProps = async () =>{
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
    ],
        { 
            fetch: ['publication.title', 'publication.content'],
            pageSize: 100, 
        }
    )
    const posts = response.results.map(post => {
       return {
        slug : post.uid,
        title:  RichText.asText(post.data.title),
        excerpt: post.data.content.find(content => content.type === 'paragraph').text
       };
    })
    console.log(response);
    return {
        props: {}
    }
} 