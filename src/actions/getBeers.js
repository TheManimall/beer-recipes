import axios from 'axios';

import types from '../types';

//create action creators to fetch beer

const getBeersSuccess = res => ({
  type: types.GET_BEERS,
  payload: res,
});

//create action to get 10 beers

const getRenderBeers = res => ({
  type: types.GET_RENDER,
  payload: res,
})

//create async actions to get data from API

export const getBeersData = (n) => async (dispatch) => {
  const url = `https://api.punkapi.com/v2/beers?page=${n}`;
  try {
    const resBeer = await axios.get(url);
    dispatch(getBeersSuccess(resBeer.data));
  } catch (err) {
    throw (err);
  }
};

export const loadAnotherBeer = (n) => async (dispatch) => {
  const url = `https://api.punkapi.com/v2/beers?page=${n}`;
  try {
    const resBeer = await axios.get(url);
    dispatch(getRenderBeers(resBeer.data));
  } catch (err) {
    throw (err);
  }
};

export const lazyScroll = () => ({
  type: types.LAZY_SCROLL,
});

export const onSelect = id => ({
  type: types.ON_SELECT,
  payload: id,
});