import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBeersData, lazyScroll, loadAnotherBeer, onSelect } from '../actions/getBeers';
import BeersListComp from '../components/BeersListComp';

class BeersListCont extends Component {
  componentDidMount() {
    const { getBeers, page } = this.props;

    getBeers(page);
  }

  render() {
    const { beers, lazyScroll, loadBeers, cursor, limit, page, onSelect } = this.props;

    let heightY = window.innerHeight;

    if (cursor === limit) {
      loadBeers(page)
    };

    const beersList = beers.map((el) => {
      return (
        <BeersListComp 
          key={el.id}
          name={el.name}
          id={el.id}
          tag={el.tagline}
          onSelect={onSelect}
        />
      );
    })

    window.onscroll = () => {
      if (window.pageYOffset > 620) {
        lazyScroll()
      }
    }

    return (
    <div className="main-container">
      <div className="beer-container">
        { beersList }
      </div>
      <div className="button-element"> 
        <button>DELETE</button>
      </div>
    </div>
    );
  }
}



const mapStateToProps = state => ({
  beers: state.beer.renderBeers,
  cursor: state.beer.cursor,
  limit: state.beer.limit,
  page: state.beer.page,
});

const mapDispatchToProps = dispatch => ({
  getBeers: (n) => {
    dispatch(getBeersData(n));
  },
  lazyScroll: () => {
    dispatch(lazyScroll());
  },
  loadBeers: (n) => {
    dispatch(loadAnotherBeer(n));
  },
  onSelect: (id) => {
    dispatch(onSelect(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps) (BeersListCont);