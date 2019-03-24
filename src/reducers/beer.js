import types from '../types';

const beerReducer = (state = { beers: [], renderBeers: [], selectedBeers: [], cursor: 0, limit: 25, page: 1 }, action) => {
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
        beers: state.beers.slice().concat(action.payload),
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
        renderBeers: state.renderBeers.slice().concat(state.beers.slice().splice(state.cursor, 5)),
        cursor: state.cursor += 5,
      }
    case types.ON_SELECT:
      return {
        ...state,
        selectedBeers: state.selectedBeers.concat(state.beers.filter(el => el.id === action.payload)),
      }
    case types.LAZY_SCROLL:
      let deleteBeers = state.renderBeers.slice().splice(5, 5);
      return {
        ...state,
        renderBeers: deleteBeers.concat(state.beers.slice().splice(state.cursor, 5)),
        cursor: state.cursor += 5,
      }
    default:
      return {
        ...state,
      };
  }
};

export default beerReducer;

 // ...state,
        // beers: state.beers.concat(action.payload),
        // renderBeers: action.payload.splice(state.cursor, 10),
        // cursor: state.cursor += 24,

// let addItems = state.beers.slice().splice(state.addCursor, 5);
// let deleteItems = state.renderBeers.splice(5, 5);

// const beerReducer = (state = { beers: [], renderBeers: [], cursor: 0, addCursor: 10 }, action) => {
//   switch (action.type) {
//     case types.GET_BEERS:
//       return {
//         ...state,
//         beers: action.payload,
//       };
//     case types.GET_RENDER:
//       return {
//         ...state,
//         renderBeers: state.beers.slice().splice(0, 10),
//       }
//     case types.DELETE_FROM_RENDER:
//       return {
//         ...state,
//         renderBeers: state.renderBeers.slice().splice(5, 5),
//       }
//     case types.ADD_TO_RENDER:
//       return {
//         ...state,
//         renderBeers: state.renderBeers.concat(state.beers.slice().splice(state.addCursor, 5)),
//         addCursor: state.addCursor += 5,
//       }
//     default:
//       return {
//         ...state,
//       };
//   }
// };