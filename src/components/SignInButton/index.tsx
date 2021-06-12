import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
    const isUserLoggedIn = false

    return isUserLoggedIn ? (
        <button type="button" className={styles.signInButton}>
            <FaGithub color="#04d361"/>
            Leonardo Costa
            <FiX className={styles.closeIcon} color="#737380"/>
        </button>
    ) : (
        <button type="button" className={styles.signInButton}>
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    )
}