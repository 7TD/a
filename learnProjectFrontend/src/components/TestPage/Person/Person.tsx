import styles from "./Person.module.scss";
import React from "react";
import {IPerson} from "../../../models/IPerson";

interface PersonProps {
    person: IPerson
}


export const Person = ({ person }: PersonProps) => {
    const [isActive, setIsActive] = React.useState(false);

    const onActive = () => {
        setIsActive(prev => !prev);
        console.log(isActive);
    }

    return (
        <div
            onClick={onActive}
            className={isActive ? styles.personActive : styles.person}
        >
            <p>id: {person.id}</p>
            <p>name: {person.name}</p>
        </div>
    );
}

// interface Props {
//     id: number;
//     name: string;
// }
//
// export const Person = (props) => {
//     const {id, name} = props;
//
//     return (
//         <div className={styles.person}>
//             <p>id: {id}</p>
//             <p>name: {name}</p>
//         </div>
//     );
// };

