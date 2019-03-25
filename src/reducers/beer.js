import types from '../types';

const beerReducer = 
(state = { beers: [], renderBeers: [], selectedBeers: [], beerInfo: [], cursor: 0, limit: 25, page: 1, showDelBtn: false }, 
  action) => {
  switch (action.type) {
    case types.GET_BEERS:
      return {
        ...state,
        beers: action.payload,
        renderBeers: action.payload.slice().splice(state.cursor, 10),
        cursor: state.cursor += 10,
        page: state.page += 1,
      };
    case types.GET_RENDER:
      return {
        ...state,
        beers: state.beers.concat(action.payload),
        limit: state.limit += 25,
        page: state.page += 1,
      }
    case types.DELETE_FROM_RENDER:
      return {
        ...state,
        renderBeers: state.renderBeers.slice().splice(5, 5),
      }
    case types.ADD_TO_RENDER:
      return {
        ...state,
        renderBeers: state.renderBeers.concat(state.beers.slice().splice(state.cursor, 5)),
        cursor: state.cursor += 5,
      }
    case types.ON_SELECT:
      return {
        ...state,
        selectedBeers: 
          state.selectedBeers.includes(action.payload) ?
          (state.selectedBeers.filter(el => action.payload !== el)) : 
          (state.selectedBeers.concat(action.payload)),
        showDelBtn: state.selectedBeers.length >= 0 ? true : false,
      }
    case types.LAZY_SCROLL:
      let deleteBeers = state.renderBeers.slice().splice(5, 5);
      return {
        ...state,
        renderBeers: deleteBeers.concat(state.beers.slice().splice(state.cursor, 5)),
        cursor: state.cursor += 5,
      }
    case types.DELETE_SELECTED:
      let deleteSel = state.renderBeers.filter((el) => !state.selectedBeers.includes(el.id));
      let amountOfDel = 10 - deleteSel.length;
      return {
        ...state,
        renderBeers: deleteSel.concat(state.beers.slice().splice(state.cursor, amountOfDel)),
        cursor: state.cursor += amountOfDel,
        selectedBeers: [],
        showDelBtn: false,
      }
    case types.GET_BEER_INFO:
      return {
        ...state,
        beerInfo: state.beers.filter(el => el.id === +action.payload),
      }
    default:
      return {
        ...state,
      };
  }
};

export default beerReducer;