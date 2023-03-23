import PlusBtn from '../../assets/svg/PlusBtn.svg';
import styles from './TestPage.module.scss';
import {Field} from './Fields/Fields';
import {Person} from './Person/Person';
import {EmptyPerson} from './Person/EmptyPerson';
import React from 'react';
import {PersonInfo} from '../../models/PersonInfo';
import {PersonApi} from '../../api/personRequest';


export const TestPage = () => {
    const [persons, setPersons] = React.useState<PersonInfo[]>([]);
    const [dellPerson, setDellPerson] = React.useState<PersonInfo[]>([]);
    const [addPerson, setAddPerson] = React.useState<PersonInfo[]>([]);

    const addField = () => {
        setAddPerson(prev => [...prev, {id: 0, firstName: ''}])
    }

    // Запрос данных
    async function getPersonById() {
        setPersons([]);
        let ids: number[] = [];
        addPerson.map(p => ids.push(p.id));
        const respons = await new PersonApi().getPersons(ids);
        setPersons(respons.data);
    }

    async function getPerson() {
        setPersons([]);
        const response = await new PersonApi().getAllPersons();
        setPersons(response.data);
    }

    React.useEffect(() => {
        getPerson();
    }, []);

    // Обновление
    async function putPersons() {
        await new PersonApi().putPersons(addPerson);
        getPerson();
    }

    // Удаление
    async function detelePersons() {
        let ids: number[] =[];
        dellPerson.map(p => ids.push(p.id));
        await new PersonApi().deletePersons(ids);
        console.log(ids);
        getPerson();
    }

    // // Добавление
    async function addPersons() {
        let names: string[] = [];
        addPerson.map(p => names.push(p.firstName));
        await new PersonApi().addPersons(names);
        getPerson();
    }

    return (
        <div className={styles.dd}>
            <div className={styles.bg}>
                <div className={styles.Left}>
                    <button onClick={addPersons} className={styles.BtnGreen}>Добавить</button>
                    <button onClick={putPersons} className={styles.BtnBlue}>Изменить</button>
                    <button onClick={detelePersons} className={styles.BtnRed}>Удалить</button>
                    <button onClick={getPersonById} className={styles.BtnGreen}>Получить</button>
                    <button onClick={getPerson} className={styles.BtnGreen}>Получить все</button>
                </div>
                <div className={styles.Middle}>
                    {addPerson.map((person, index) => (
                        <Field
                            key={index}
                            index={index}
                            person={addPerson}
                            setPerson={setAddPerson}
                        />
                    ))}
                    <img onClick={addField} src={PlusBtn} alt="PlusBtn"/>
                </div>
                <div className={styles.Right}>
                    {persons.length !== 0 ?
                        persons.map(person => (
                            <Person
                                setState={setDellPerson}
                                state={dellPerson}
                                person={person}
                                key={person.id}
                            />
                        )) : <EmptyPerson/>}
                </div>
            </div>
        </div>
    );
};

