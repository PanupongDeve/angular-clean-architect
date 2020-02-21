import axios from 'axios';

export class CatsRepository {

    async getCats() {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=18&mime_types=&order=Random&size=small&page=2&sub_id=demo-ba8a41');
        return response.data;
    }
}