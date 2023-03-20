import {PersonInfo} from '../models/PersonInfo';
import axios from 'axios';

export class PersonApi {
    apiUrl: string = 'https://localhost:7095/api/Person';

    async getPersons() {
        return await axios.get<PersonInfo[]>(this.apiUrl);
    }

    getPersonById(id: number) {
        return axios.get<PersonInfo>(`${this.apiUrl}/${id}`);
    }
}


