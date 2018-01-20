'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import photos from '../data/photos';

export default class PhotoPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const photo = photos.filter((photo) => photo.id === id)[0];
    if (!photo) {
      return <NotFoundPage/>;
    }
    return (
      <div className="photo-full">
        <div className="photo">
          <div className="picture-container">
            <img src={`/img/${photo.id}.jpg`}/>
            <h2 className="name">{photo.place}</h2>
          </div>
          <section className="description">
            {photo.description}
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
