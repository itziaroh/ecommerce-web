import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="./shop">
          SHOP
        </Link>
        <Link className="option" to="./shop">
          CONTACT
        </Link>
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {hidden ? null : <Cart />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);