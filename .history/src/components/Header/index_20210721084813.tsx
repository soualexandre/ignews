const styles from './styles.module.scss'
export function Header(){
    return(
        <div>
            <img src="/images/logo.svg" alt="ig.news"/>
            <nav>
                <a href="#">Home</a>
                <a href="#">Posts</a>
            </nav>
        </div>
    )
}