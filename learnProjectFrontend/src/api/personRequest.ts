import {IPerson} from "../models/IPerson";
import axios, {Axios, AxiosResponse} from "axios";

// export const getAllPersons = (): Promise<IPerson[]> =>
//     new Promise((resolve) => {
//         axios.get<IPerson[]>('https://localhost:7095/api/Person');
//     });

export class PersonApi {
    apiUrl: string = 'https://localhost:7095/api';

    async getPersons() {
        return await axios.get<IPerson[]>(`${this.apiUrl}/Person`);
    }
}


