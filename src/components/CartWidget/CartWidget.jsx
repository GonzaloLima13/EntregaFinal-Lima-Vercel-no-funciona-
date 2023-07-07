import React from "react";
import "./cartwidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
      <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
            <div className="qty-display">0</div>
          </div>
  );
};

export default CartWidget;
