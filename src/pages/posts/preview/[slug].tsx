import { GetStaticProps } from "next";
import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import { RichText } from "prismic-dom";
import styles from '../post.module.scss'

import { getPrismicClient } from "../../../services/prismic";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
interface PostPreviewProps{
    post:{
        slug: string;
        title: string;
        content: string;
        upadtedAt: string
    }
}
export default function PostPreview( {post} : PostPreviewProps ){
  const [session] =  useSession();
  const router = useRouter();

  useEffect(() => {
    if(session?.activeSubscription){
      router.push(`/posts/${post.slug}`);
    }
  },[session]);

    return (
        <>
        <Head>
            {post.title} | Ignews
        </Head>
        <main className={styles.container}>
            <article className={styles.post}>
                <h1>{post.title}</h1>
                <time>{post.upadtedAt}</time>
                <div 
                className={`${styles.postContent} ${styles.previewContent}`}
                dangerouslySetInnerHTML={{ __html: post.content}}> 
                </div>
                <div className={styles.contiueReading}>
                    Wanna continue reading?
                    <Link href="/">
                    <a>subscribe Now 🤗</a></Link>
                </div>
            </article>
        </main>
        </>

    );
}
export const getStaticPaths = () => {
    return{
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {slug} = params;
    const prismic = getPrismicClient();
    const response = await prismic.getByUID('publication', String(slug), {})
    
    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content.splice(0, 3) ),
        upadtedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    };

    return{
        props:{
            post,
        },
        redirect: 60 * 30, //30 minutes
    }
}