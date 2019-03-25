import axios from 'axios';

import types from '../types';

//create action creators to get beer recipes

const getBeersSuccess = res => ({
  type: types.GET_BEERS,
  payload: res,
});

//create action to get another beers

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

//create async actions to get new list of beer recipes

export const getAnotherBeer = (n) => async (dispatch) => {
  const url = `https://api.punkapi.com/v2/beers?page=${n}`;
  try {
    const resBeer = await axios.get(url);
    dispatch(getRenderBeers(resBeer.data));
  } catch (err) {
    throw (err);
  }
};

//create action creator for lazy scroll

export const lazyScroll = () => ({
  type: types.LAZY_SCROLL,
});

//create action creator for select 

export const onSelect = id => ({
  type: types.ON_SELECT,
  payload: id,
});

//create action creator for delete items

export const deleteSelected = () => ({
  type: types.DELETE_SELECTED,
});

export const getBeerInfo = (id) => ({
  type: types.GET_BEER_INFO,
  payload: id,
});