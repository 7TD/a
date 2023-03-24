import styles from './Questionnaire.module.scss';
import Field from '../../components/Field/Field';


export const Questionnaire = () => {


    return (
        <>
            <div className={styles.head}>
                <h2>Questionnaire</h2>
            </div>
            <div className={styles.Content}>
                <div className={styles.ContentLeft}>
                    <div className={styles.ContentLeftImg} />
                    <p>choose image...</p>
                </div>

                <div>
                    <div className={styles.ContentFields}>
                        <Field />
                        <Field />
                        <Field />
                        <Field />
                        <Field />
                        <Field />
                        <Field />
                    </div>
                    <div className={styles.ContentBtn}>
                        <button className={styles.ContentBtnGreen}>Save</button>
                        <button className={styles.ContentBtnRed}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
}