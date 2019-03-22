import { combineReducers } from 'redux';

import beerReducer from './beer';

const rootReducer = combineReducers ({
  beer: beerReducer,
});

export default rootReducer;