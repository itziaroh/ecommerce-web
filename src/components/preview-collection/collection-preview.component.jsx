import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './colletion-preview.styles';


const ColletionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default ColletionPreview;