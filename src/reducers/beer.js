import types from '../types';

const beerReducer = (state = { beers: [] }, action) => {
  switch (action.type) {
    case types.GET_BEERS:
    return {
      ...state,
      beers: action.payload,
    };
    default:
      return {
        ...state,
      };
  }
};

export default beerReducer;