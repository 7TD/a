import styles from './Register.module.scss';


export const Register = () => {


    return(
        <>
            <div className={styles.head}>
                <h2>Register</h2>
            </div>
            <div className={styles.Content}>
                <div className={styles.ContentField}>
                    <p>Login</p>
                    <input type="text"/>
                </div>
                <div className={styles.ContentField}>
                    <p>Email</p>
                    <input type="text"/>
                </div>
                <div className={styles.ContentField}>
                    <p>Password</p>
                    <input type="password"/>
                </div>
                <div className={styles.ContentField}>
                    <p>Repeat the password</p>
                    <input type="password"/>
                </div>
                <button>Enter</button>
            </div>
        </>
    );
}