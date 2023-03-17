import { IPerson } from "../models/IPerson";
import axios from "axios";

export const getAllPersons = (): Promise<IPerson[]> =>
    new Promise((resolve) => {
        //resolve(axios.get<IPerson[]>('https://localhost:7095/api/Person'));
    });


