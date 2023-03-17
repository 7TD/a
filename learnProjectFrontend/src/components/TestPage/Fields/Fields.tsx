import styles from "./Field.module.scss";
import React from "react";

interface Props {}

export const Field: React.FC<Props> = (props) => {


    return (
        <div>
            <p>id</p>
            <input className={styles.field} type="number"/>
            <p>name</p>
            <input className={styles.field} type="text"/>
        </div>
    );
};
