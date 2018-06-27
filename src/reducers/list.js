import { assoc, compose } from 'lodash/fp';
import * as LIST_ACTIONS from '../actions/list';

const initialState = { data: [], loading: true };

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_ACTIONS.FETCH_LIST_PENDING:
      return assoc('loading', true, state);

    case LIST_ACTIONS.FETCH_LIST_SUCCESS:
      return compose(
        assoc('data', payload.data),
        assoc('loading', false),
      )(state);

    default:
      return state;
  }
};

export default listReducer;
