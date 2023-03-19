import styles from "./Field.module.scss";
import React from "react";
import axios from "axios";

interface FieldProps {
    idList: number[]
    setIsAdded: Function
    setIdList: Function
    isGet: boolean
    isAdded: boolean
}

export const Field = ({ setIsAdded, setIdList, idList, isGet, isAdded }: FieldProps) => {
    const [id, setId] = React.useState('');
    const [FirstName, setFirstName] = React.useState('');

    React.useEffect(() => {
        if(isGet === true) {
            setIdList([...idList, id]);
        }
    }, [isGet]);

    React.useEffect(() => {
        if(isAdded === true) {
            axios.post('https://localhost:7095/api/Person/person', FirstName).then(() => console.log(FirstName));
            setIsAdded(false);
        }
    }, [isAdded]);

    return (
        <div>
            <p>id  {id}</p>
            <input onChange={(event) => setId(event.target.value)} className={styles.field} type="number"/>
            <p>name  {FirstName}</p>
            <input onChange={(event) => setFirstName(event.target.value)} className={styles.field} type="text"/>
        </div>
    );
};
