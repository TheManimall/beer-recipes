import React, { Component } from 'react';

class BeersListComp extends Component {
  render() {
    const { name, tag, heightEl, id, onSelect } = this.props;
    return (
      <div className="beer-element" onContextMenu={() => onSelect(id)}>
        <div className="name-block">
        
          <h1>{id + ' ' + name }</h1>
        </div>
        <div className="content">
          <p>{tag}</p>
        </div>
      </div>
    );
  }
}

export default BeersListComp;