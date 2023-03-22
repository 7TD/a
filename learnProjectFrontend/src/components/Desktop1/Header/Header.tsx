import styles from './Header.module.scss';

function Headerr () {
    return (
        <div>
            <header>
                <div className={styles.LeftNav}>
                    <p>Menu</p>
                </div>
                <div className={styles.options}>
                    <p>Gallery</p>
                    <p>Login</p>
                    <p>Register</p>
                    <p>About</p>
                </div>
            </header>
        </div>
    );
}

export default Headerr;