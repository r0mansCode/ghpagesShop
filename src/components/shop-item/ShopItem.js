import React from "react";
import "./ShopItem.css";
import { useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { itemAdded, itemRemoved } from "../../features/counter/counterSlice";

export const ShopItem = ({ image, name, price, id, basket }) => {
  const dispatch = useDispatch();

  const countItems = (array) => {
    const filteredArray = array?.filter((item) => item.id === id);
    return filteredArray?.length;
  };
  return (
    <div className="item">
      <img src={image} className="itemImage" alt="Shopping Item" />
      <div className="itemName">{name}</div>
      <div className="itemDescription">
        <section className="descriptionSectionFirst">
          <div className="price">Cena</div>
          <strong className="priceNumber">€{price}</strong>
        </section>
        <section className="descriptionSectionSecond">
          {countItems(basket) < 1 ? (
            <div
              id={id}
              className="buyButton"
              onClick={() =>
                dispatch(
                  itemAdded({
                    id: id,
                    image: image,
                    name: name,
                    price: price,
                  })
                )
              }
            >
              Ielikt Grozā
            </div>
          ) : (
            <div className="buyButton buyButtonClicked">
              <div className="quantitySelectorRow">
                <div
                  className="addRemove"
                  onClick={() => dispatch(itemRemoved(id))}
                >
                  <AiOutlineMinus />
                </div>
                <div>{countItems(basket)}</div>
                <div
                  className="addRemove"
                  onClick={() =>
                    dispatch(
                      itemAdded({
                        id: id,
                        image: image,
                        name: name,
                        price: price,
                      })
                    )
                  }
                >
                  <AiOutlinePlus />
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
