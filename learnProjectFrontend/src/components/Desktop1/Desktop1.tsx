import styles from './Desktop1.module.scss';
import Headerr from './Header/Header';
import Field from './Field/Field';

function Desctop1() {
    return(
        <div className={styles.d1}>
            <div className={styles.d2}>
                <Headerr />
                <div className={styles.content}>
                    <div className={styles.Head}>
                        <span>Questionnaire</span>
                    </div>
                    <div className={styles.Line}></div>
                    <div className={styles.bbody}>
                        <div className={styles.Foto}></div>

                        <div className={styles.fields}>
                            <Field />
                            <Field />
                            <Field />
                            <Field />
                            <Field />
                            <Field />
                            <Field />
                        </div>
                    </div>
                    <div className={styles.Btn}>
                        <button className={styles.Green}>Save</button>
                        <button className={styles.Read}>Cancel</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Desctop1;