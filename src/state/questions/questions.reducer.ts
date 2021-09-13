import { LcddActions } from '../actions';
import { BooksState, initialBooksState } from './questions.model';

export function homeReducer(state: BooksState = initialBooksState, action: LcddActions): BooksState {
    switch (action.type) {
        default:
            return state;
    }
}
