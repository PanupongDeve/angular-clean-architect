import { BehaviorSubject } from 'rxjs';
import { repositories } from '../../Repositories';

const intitalState = [];

export class CatsStore {

    private subject: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(intitalState);

    constructor() {

    }

    public getCats(): BehaviorSubject<Array<any>> {
        return this.subject;
    }

    public async fetchCats() {
        const { catsRepository } = repositories;
        const data = await catsRepository.getCats();
        this.subject.next(data);
    }


}