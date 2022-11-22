import React from "react";
import cn from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  itemAdded,
  itemRemoved,
  allItemsRemoved,
} from "../../features/counter/counterSlice";
import { FaTimes } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

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
    <div className={cn.cartContainer}>
      <div className={cn.cartTitle}>Mani Pasūtījumi</div>
      <div className={cn.cartSubcontainer}>
        <div className={cn.cartItemListContainer}>
          {removeDuplicatesArray().map((item) => {
            return (
              <div className={cn.cartItem}>
                <section className={cn.cartItemFirstSection}>
                  <img
                    src={item.image}
                    className={cn.cartItemImage}
                    alt="Shopping Item"
                  />
                  <div className={cn.cartItemName}>{item.name}</div>
                </section>
                <div className={cn.cartItemSecondSection}>
                  <section>
                    <div className={cn.quantitySelectorRow}>
                      <div
                        className={cn.addRemove}
                        onClick={() => dispatch(itemRemoved(item.id))}
                      >
                        <AiOutlineMinus className={cn.changeCount} />
                      </div>
                      <div>{countItems(products, item.id)}</div>
                      <div
                        className={cn.addRemove}
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
                        <AiOutlinePlus className={cn.changeCount} />
                      </div>
                    </div>
                  </section>
                  <section className={cn.thirdSection}>
                    <div className={cn.cartItemPriceNumber}>
                      €{countItems(products, item.id) * item.price}
                    </div>
                  </section>
                  <FaTimes
                    onClick={() => dispatch(allItemsRemoved(item.id))}
                    className={cn.removeAllButton}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className={cn.cartTotalAmmount}>
          <div className={cn.cartTotalAmmountTitle}>Kopā apmaksai</div>
          <div className={cn.cartTotalAmmountSubContainer}>
            <div>
              <div>Pamatsumma:</div>
              <div>€{totalPrice()}</div>
            </div>
            <div className={cn.totalPrice}>
              <div>Kopējā summa:</div>
              <div>€{totalPrice()}</div>
            </div>
          </div>
          <div className={cn.payButton}>Apmaksāt</div>
        </div>
      </div>
    </div>
  );
};
