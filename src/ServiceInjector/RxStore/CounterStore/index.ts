import { BehaviorSubject } from 'rxjs';

const intitalState = 0;

export class CounterStore {

    private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(intitalState);

    constructor() {

    }

    public getCount(): BehaviorSubject<number> {
        return this.counterSubject;
    }

    public increment(): void {
        let count: number = this.counterSubject.getValue() + 1;
        this.counterSubject.next(count);
    };

    public decrement(): void {
        let count: number = this.counterSubject.getValue() - 1;
        this.counterSubject.next(count);
    };

    public setCount(count: number): void {
        this.counterSubject.next(count)
    }   

}