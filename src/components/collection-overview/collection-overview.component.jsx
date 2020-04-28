import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { CollectionOverviewContainer } from './collection-overview.styles';

import ColletionPreview from '../preview-collection/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';


const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <ColletionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </CollectionOverviewContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);