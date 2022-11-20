import React from "react";
import bottledCocktail from "../../assets/images/bottledCocktail.jpg";
import oranges from "../../assets/images/oranges.jpg";
import pornstar from "../../assets/images/pornstar.jpg";
import "./Shop.css";
import { ShopItem } from "../../components/shop-item/ShopItem";
import shopItems from "../../data/shopItems.json";
import { useSelector } from "react-redux";

export const Shop = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="shopContainer">
      {shopItems.map((item) => {
        return (
          <ShopItem
            id={item.id}
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            basket={products}
          />
        );
      })}
      {/* <div>
        {removeDuplicatesArray().map((item) => {
          return <div>{item.name}</div>;
        })}
      </div> */}
    </div>
  );
};
