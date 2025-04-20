import "./PlaceOrder.css";
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
  const selectedItems = food_list
    .filter((item) => cartItems[item._id] > 0)
    .map((item) => `${item.name}*${cartItems[item._id]}`);

  const bill = getTotalCartAmount() ?? 0;
  return (
    <>
      <div className="cart">
        <h1 className="text-5xl mb-4 font-semibold text-center">
          Your order has been placed.✨
        </h1>
        <div className="cart-items">
          <h2 className="text-2xl mb-6 font-semibold">Your Orders:</h2>
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price * cartItems[item._id]}</p>
                  </div>
                  <hr />
                </>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{0}</p>
              </div>

              <div className="cart-total-details">
                <b>Total</b>

                <b>{getTotalCartAmount()}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
