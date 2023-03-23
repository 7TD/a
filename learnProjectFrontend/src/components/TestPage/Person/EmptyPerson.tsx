import styles from './Person.module.scss';


export const EmptyPerson = () => {
    return (
        <div className={styles.person}>
            <span>Нет элементов</span>
        </div>
    );
}