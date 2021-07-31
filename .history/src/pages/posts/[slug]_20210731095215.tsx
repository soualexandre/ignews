import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { RichText } from "prismic-dom";
import styles from './post.module.scss'

import { getPrismicClient } from "../../services/prismic";
interface PostProps{
    post:{
        slug: string;
        title: string;
        content: string;
        upadtedAt: string
    }
}
export default function Post( {post} : PostProps ){
  
  
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
                className={styles.postContent}
                dangerouslySetInnerHTML={{ __html: post.content}}> 
                </div>
            </article>
        </main>
        </>

    );
}

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
    const session = await getSession({req})
    const {slug} = params;
    console.log(session)
     if(!session.activeSubscription){
        return {
            redirect:{
                destination: '/',
                permanent: false,
            }
        }
    }

    const prismic = getPrismicClient(req);
    const response = await prismic.getByUID('publication', String(slug), {})
    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        upadtedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    };

    return{
        props:{
            post,
        }
    }
}