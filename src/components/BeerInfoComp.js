import React, { Component } from 'react';

class BeerInfoComp extends Component {
  render() {
    const { name, discription, imgUrl} = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>{discription}</p>
        <img src={imgUrl} alt="beer-img" />
      </div>
    );
  }
}

export default BeerInfoComp;