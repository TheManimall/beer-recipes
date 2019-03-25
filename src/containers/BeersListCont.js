import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBeersData, lazyScroll, loadAnotherBeer, onSelect, deleteSelected } from '../actions/getBeers';
import BeersListComp from '../components/BeersListComp';

class BeersListCont extends Component {
  componentDidMount() {
    const { getBeers, page } = this.props;

    getBeers(page);
  }

  render() {
    const { beers, lazyScroll, loadBeers, cursor, limit, page, onSelect, deleteSelected, showBtn } = this.props;

    let winHeight = window.innerHeight;

    let docHeight = document.body.scrollHeight;

    if (Math.abs(limit - cursor) <= 10 ){
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

    

    let scrollTop = window.pageYOffset;

    window.onscroll = () => {
      let bodyHeight = docHeight / winHeight;
      let scrollTop = window.pageYOffset;
      let scroll = (scrollTop / bodyHeight);

      if (scrollTop > (docHeight/2) ) {
        lazyScroll();
      }
      
      // if (window.pageYOffset >= winHeight - 100) {
      //   lazyScroll()
      // };
    }

   

    let styleBtn = showBtn ? 'flex' : 'none';
    
    console.log(styleBtn, showBtn);

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
}



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
    dispatch(loadAnotherBeer(n));
  },
  onSelect: (id) => {
    dispatch(onSelect(id))
  },
  deleteSelected: () => {
    dispatch(deleteSelected())
  },
});

export default connect(mapStateToProps, mapDispatchToProps) (BeersListCont);