import axios from 'axios';
import {ImageInfo} from "../models/ImageInfo";

export class ImageApi {
    apiUrl: string = 'https://localhost:7095/api/Image';

    async addImage(data: FormData) {
        return await axios.post(this.apiUrl, data);
    }

    async getImages() {
        return await axios.get<ImageInfo[]>(this.apiUrl);
    }

}
