import styles from './styles.module.scss'
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom'

type Post = {
    slug: string;
    title: string,
    excerpt: string,
    upadtedAt: string;
}
interface PostsProps {
    posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
    return (
        <>
            <Head>
                <title>Posts | ig.news</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(post => (
                        <a key={post.slug} href="#">
                            <strong>{post.title</strong>
                            <p>{post.excerpt}</p>
                        </a>
                    ))}
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
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
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            upadtedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        };
    })
    console.log(response);
    return {
        props: {
            posts
        }
    }
}