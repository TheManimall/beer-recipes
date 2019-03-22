import axios from 'axios';

import types from '../types';

let n = 1;

const url = `https://api.punkapi.com/v2/beers?page=${n}`;

//create action creators to fetch beer

const getBeersSuccess = res => ({
  type: types.GET_BEERS,
  payload: res,
});

//create async actions to get data from API

export const getBeersData = () => async (dispatch) => {
  try {
    const resBeer = await axios.get(url);
    dispatch(getBeersSuccess(resBeer.data));
  } catch (err) {
    throw (err);
  }
};

export default { getBeersData };