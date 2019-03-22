import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getBeersData } from '../actions/getBeers';
import BeersListComp from '../components/BeersListComp';

class BeersListCont extends Component {
  componentDidMount() {
    const { getBeers } = this.props;

    getBeers();
  }

  render() {
    const { beers } = this.props;

    const beersList = beers.map((el) => {
      return (
        <BeersListComp 
          key={el.id}
          name={el.name}
        />
      );
    })
    return (
    <div>
      { beersList }
    </div>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beer.beers,
});

const mapDispatchToProps = dispatch => ({
  getBeers: () => {
    dispatch(getBeersData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps) (BeersListCont);