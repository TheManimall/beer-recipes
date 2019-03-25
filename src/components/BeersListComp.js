import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeersListComp extends Component {
  render() {
    const { name, tag, id, onSelect } = this.props;

    return (
      <Link to={`/beer/${id}`}>
        <div className="beer-element" onContextMenu={() => onSelect(id)}>
          <div className="name-block">
            <h1>{name}</h1>
          </div>
          <div className="content">
            <p>{tag}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default BeersListComp;