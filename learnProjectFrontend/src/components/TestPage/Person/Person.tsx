import styles from './Person.module.scss';
import React, {useState} from 'react';
import {PersonInfo} from '../../../models/PersonInfo';

interface PersonProps {
    person: PersonInfo
    setState: Function
    state: PersonInfo[]
}

export const Person = ({ person, state, setState }: PersonProps) => {
    const [isActive, setIsActive] = useState(false);

    const dell = () => {
        if (isActive === false) {
            setState([...state, person]);
        }
        if (isActive === true) {
            setState(state.filter((fruit) => {
                return fruit.id !== person.id;
            }));
        }
        setIsActive(prev => !prev);
    }

    return (
        <div
            onClick={dell}
            className={isActive ? styles.personActive : styles.person}
        >
            <p>id: {person.id}</p>
            <p>name: {person.firstName}</p>
        </div>
    );
}

