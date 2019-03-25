import React, { Component } from 'react';

class BeersListComp extends Component {
  render() {
    const { name, tag, id, onSelect } = this.props;

    return (
      <div className="beer-element" onContextMenu={() => onSelect(id)}>
        <div className="name-block">
          <h1>{name}</h1>
        </div>
        <div className="content">
          <p>{tag}</p>
        </div>
      </div>
    );
  }
}

export default BeersListComp;