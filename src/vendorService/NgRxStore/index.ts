import { counterReducer } from './counter/counter.reducer';
import { catsReducer } from './cats/cats.reducer';

export const combineReducers = {
    count: counterReducer,
    cats: catsReducer
}