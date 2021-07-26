import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
import {FiX} from 'react-icons/fi';
import {signIn, useSession} from 'next-auth/client'
export function SignInButton(){
    const [session] = useSession();
    
    return session ? (
        <button
        type="button"
        className={styles.signInButton}
        >
            <FaGithub color="#04d361"/>
            Alexandre Souza
            <FiX color="#737388" className={styles.closeIcon} />
        </button>
          ) : (
            <button
            type="button"
            className={styles.signInButton}
            onClick={ () => signIn('github')}
            >
                <FaGithub color="#eba417"/>
                Sign In with Github
            </button>
        );
}