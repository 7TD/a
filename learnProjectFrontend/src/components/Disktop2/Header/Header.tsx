import styles from './Header.module.scss';

export const Header = () => {


    return (
        <>
            <header className={styles.Header}>
                <span>Menu</span>
                <ul>
                    <li>Gallery</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>About</li>
                </ul>
            </header>
        </>
    );
}