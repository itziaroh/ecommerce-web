import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './collection-overview.styles.scss';

import ColletionPreview from '../preview-collection/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <ColletionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);