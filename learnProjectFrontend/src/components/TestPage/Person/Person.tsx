import styles from "./Person.module.scss";
import React, {useState} from "react";
import {IPerson} from "../../../models/IPerson";

interface PersonProps {
    person: IPerson
    setState: Function
    state: IPerson[]
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

