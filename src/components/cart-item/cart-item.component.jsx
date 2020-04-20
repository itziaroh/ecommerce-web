import React from 'react';

import { CartItemContainer, ItemImage, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

export default CartItem