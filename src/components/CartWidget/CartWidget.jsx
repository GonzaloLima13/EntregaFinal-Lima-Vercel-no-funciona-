import { GiShoppingCart } from "react-icons/gi";
import "./CartWidget.css";

export const CartWidget = () => (
  <div className="cart-widget">
    <GiShoppingCart /> <span className="cart-widget__qty">(3)</span>
  </div>
);
