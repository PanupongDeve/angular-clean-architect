import { createReducer, on } from '@ngrx/store';
import { fetchCats } from './cats.actions';
import { repositories } from '../../../ServiceInjector/Repositories';

export const initialState = [];

const fetchCatsAction = async (state) => {
    const {
        catsRepository
    } = repositories;

    const response = await catsRepository.getCats();

    return response;
}

const _catsReducer = createReducer(initialState,
  on(fetchCats, fetchCatsAction),
);

export function catsReducer(state, action) {
  return _catsReducer(state, action);
}


