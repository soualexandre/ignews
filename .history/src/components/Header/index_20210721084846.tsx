import styles from './styles.module.scss'
export function Header() {
    return (
        <header>
            <div>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Posts</a>
                </nav>
            </div>
        </header>
    )
}