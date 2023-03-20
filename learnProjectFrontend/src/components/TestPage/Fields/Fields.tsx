import styles from './Field.module.scss';
import React from 'react';
import {PersonInfo} from '../../../models/PersonInfo';

interface FieldProps {
    index: number
    person: PersonInfo[]
    setPerson: Function
}

export const Field = ({ index, person, setPerson }: FieldProps) => {
    const [id ,setId] = React.useState('');
    const [name ,setName] = React.useState('');

    const onChangeId = (event: any) => {
        setId(event.target.value)
        setPerson([...person.slice(0, index), {id: event.target.value, firstName: name},...person.slice(index + 1)]);
    }
    const onChangeName = (event: any) => {
        setName(event.target.value)
        setPerson([...person.slice(0, index), {id: id, firstName: event.target.value},...person.slice(index + 1)]);
    }

    return (
        <div>
            <p>id</p>
            <input onChange={onChangeId} className={styles.field} type="number"/>
            <p>name</p>
            <input onChange={onChangeName} className={styles.field} type="text"/>
        </div>
    );
};