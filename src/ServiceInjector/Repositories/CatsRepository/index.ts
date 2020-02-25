import { HttpServices } from '../../HttpServices';
export class CatsRepository {
    private http: HttpServices;
    constructor() {
        this.http = new HttpServices();
    }

    async getCats() {
        const response = await this.http.get('https://api.thecatapi.com/v1/images/search?limit=18&mime_types=&order=Random&size=small&page=2&sub_id=demo-ba8a41');
        return response.data;
    }
}