import { SignInButton } from '../SignInButton'
import {useRouter} from 'next/router'
import styles from './styles.module.scss'
import Link from 'next/link'
export function Header() {
    const { asPath } = useRouter()
    console.log(asPath)
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <Link href="/" >
                        <a className={styles.active}>Home</a>
                    </Link>
                    <Link href="/posts" prefetch>
                        <a>Posts</a>
                    </Link>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}