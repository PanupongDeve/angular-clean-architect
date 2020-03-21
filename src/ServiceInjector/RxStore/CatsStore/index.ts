import { BehaviorSubject } from 'rxjs';
import { repositories } from '../../Repositories';

const intitalState = [];

export class CatsStore {

    private subject: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(intitalState);
    private handleError: Function;

    constructor() {
        this.handleError = (error) => {
            window.alert(error);
        }
    }

    public setHandleError(handleError:Function) {
        this.handleError = handleError;
    }

    public getCats(): BehaviorSubject<Array<any>> {
        return this.subject;
    }

    public async fetchCats() {
        try {
            const { catsRepository } = repositories;
            const data = await catsRepository.getCats();
            this.subject.next(data);
        } catch (error) {
            this.handleError(error);
        }
    }


}