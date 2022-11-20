import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  itemAdded,
  itemRemoved,
  allItemsRemoved,
} from "../../features/counter/counterSlice";
import { FaTimes } from "react-icons/fa";

export const Cart = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const countItems = (array, id) => {
    const filteredArray = array?.filter((item) => item.id === id);
    return filteredArray?.length;
  };
  const removeDuplicatesArray = () => {
    const arrFilt = products.filter(
      (value, index, self) => index === self.findIndex((t) => t.id === value.id)
    );
    return arrFilt;
  };
  const totalPrice = () => {
    const allPrices = [];
    products.forEach((element) => {
      allPrices.push(element.price);
    });
    const total = allPrices.reduce((partialSum, a) => partialSum + a, 0);
    return total;
  };

  return (
    <div className="cartContainer">
      <div className="cartTitle">Iepirkuma Grozs</div>
      <div className="cartSubcontainer">
        <div className="cartItemListContainer">
          {removeDuplicatesArray().map((item) => {
            return (
              <div className="cartItem">
                <section className="cartItemFirstSection">
                  <img
                    src={item.image}
                    className="cartItemImage"
                    alt="Shopping Item"
                  />
                  <div className="cartItemName">{item.name}</div>
                </section>
                <section>
                  <div className="quantitySelectorRow">
                    <div
                      className="addRemove"
                      onClick={() => dispatch(itemRemoved(item.id))}
                    >
                      -
                    </div>
                    {countItems(products, item.id)}
                    <div
                      className="addRemove"
                      onClick={() =>
                        dispatch(
                          itemAdded({
                            id: item.id,
                            image: item.image,
                            name: item.name,
                            price: item.price,
                          })
                        )
                      }
                    >
                      +
                    </div>
                  </div>
                </section>
                <section className="thirdSection">
                  <div className="cartItemPriceNumber">
                    €{countItems(products, item.id) * item.price}
                  </div>
                </section>
                <FaTimes
                  onClick={() => dispatch(allItemsRemoved(item.id))}
                  className="removeAllButton"
                />
              </div>
            );
          })}
        </div>
        <div className="cartTotalAmmount">
          <div className="cartTotalAmmountTitle">Kopā apmaksai</div>
          <div className="cartTotalAmmountSubContainer">
            <div>
              <div>Pamatsumma:</div>
              <div>€{totalPrice()}</div>
            </div>
            <div className="totalPrice">
              <div>Kopējā summa:</div>
              <div>€{totalPrice()}</div>
            </div>
          </div>
          <div className="payButton">Apmaksāt</div>
        </div>
      </div>
    </div>
  );
};
