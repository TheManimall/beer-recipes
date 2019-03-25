import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBeerInfo } from '../actions/getBeers';
import BeerInfoComp from '../components/BeerInfoComp';

class BeerInfoCont extends Component {
  componentDidMount() {
    const { match, getBeerInfo,} = this.props;

    getBeerInfo(match.params.id);
  }
  render() {
    const { beerInfo } = this.props;
    return (
      beerInfo.map((el) => {
        return (
          <BeerInfoComp 
            name={el.name}
            discription={el.discription}
            imgUrl={el.image_url}
          />
        )
      })
    );
  }
}

const mapStateToProps = state => ({
  beerInfo: state.beer.beerInfo,
});

const mapDispatchToProps = dispatch => ({
  getBeerInfo: (id) => {
    dispatch(getBeerInfo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps) (BeerInfoCont);