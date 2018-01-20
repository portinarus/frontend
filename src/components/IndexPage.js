'use strict';

import React from 'react';
import PhotoPreview from './PhotoPreview';
import photos from '../data/photos';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="photos-selector">
          {photos.map(photoData => <PhotoPreview key={photoData.id} {...photoData} />)}
        </div>
      </div>
    );
  }
}
