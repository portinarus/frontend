'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class PhotoPreview extends React.Component {
  render() {
    return (
      <Link to={`/photo/${this.props.id}`}>
        <div className="photo-preview">
          <img src={`img/${this.props.id}.jpg`}/>
          <h2 className="name">{this.props.description}</h2>
        </div>
      </Link>
    );
  }
}
