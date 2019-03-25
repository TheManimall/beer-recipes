import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBeersData, lazyScroll, getAnotherBeer, onSelect, deleteSelected } from '../actions/getBeers';
import BeersListComp from '../components/BeersListComp';

class BeersListCont extends Component {
  componentDidMount() {
    const { getBeers, page } = this.props;

    //get beers list
    getBeers(page);
  }

  render() {
    const { beers, lazyScroll, loadBeers, cursor, limit, page, onSelect, deleteSelected, showBtn } = this.props;

    //take document height
    let docHeight = document.body.scrollHeight;

    //show or hide delete button
    let styleBtn = showBtn ? 'flex' : 'none';

    //lazy scroll
    window.onscroll = () => {
      let scrollTop = window.pageYOffset;;

      if (scrollTop > (docHeight/2) ) {
        lazyScroll();
      }
    }

    //get another beers list
    if (Math.abs(limit - cursor) <= 10 ){
      loadBeers(page)
    };

    //map list
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

    return (
    <div className="main-container">
      <div className="beer-container">
        { beersList }
      </div>
      <div className="button-element">
        <button
          style={{display: styleBtn,}} 
          onClick={() => deleteSelected()}
        >
          DELETE
        </button>
      </div>
    </div>
    );
  }
};

const mapStateToProps = state => ({
  beers: state.beer.renderBeers,
  cursor: state.beer.cursor,
  limit: state.beer.limit,
  page: state.beer.page,
  showBtn: state.beer.showDelBtn,
});

const mapDispatchToProps = dispatch => ({
  getBeers: (n) => {
    dispatch(getBeersData(n));
  },
  lazyScroll: () => {
    dispatch(lazyScroll());
  },
  loadBeers: (n) => {
    dispatch(getAnotherBeer(n));
  },
  onSelect: (id) => {
    dispatch(onSelect(id))
  },
  deleteSelected: () => {
    dispatch(deleteSelected())
  },
});

export default connect(mapStateToProps, mapDispatchToProps) (BeersListCont);