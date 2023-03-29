import {PersonInfo} from '../models/PersonInfo';
import axios from 'axios';

export class PersonApi {
    apiUrl: string = 'https://localhost:7095/api/Person';

    async getPersons(ids: number[]) {
        return await axios.post<PersonInfo[]>(this.apiUrl, ids);
    }

    async getAllPersons() {
        return await axios.get<PersonInfo[]>(this.apiUrl);
    }

    async addPersons(names: string[]) {
        await axios.post(`${this.apiUrl}/person`, names);
    }

    async deletePersons(ids: number[]) {
        await axios.post(`${this.apiUrl}/delete`, ids);
    }

    async putPersons(persons: PersonInfo[]) {
        await axios.put(this.apiUrl, persons);
    }
}


