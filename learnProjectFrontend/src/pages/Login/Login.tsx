import styles from './Login.module.scss';


export const Login = () => {


    return(
        <>
            <div className={styles.head}>
                <h2>Login</h2>
            </div>
            <div className={styles.Content}>
                <div className={styles.ContentField}>
                    <p>Login</p>
                    <input type="text"/>
                </div>
                <div className={styles.ContentField}>
                    <p>Password</p>
                    <input type="password"/>
                </div>
                <button>Enter</button>
            </div>
        </>
    );
}