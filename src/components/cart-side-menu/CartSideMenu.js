import cn from "./CartSideMenu.module.css";
import { useDispatch } from "react-redux";
import { itemAdded, itemRemoved } from "../../features/counter/counterSlice";
import { FaTimes } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const CartSideMenu = ({ cart, filteredCart, handleCartClose }) => {
  const dispatch = useDispatch();
  const countItems = (array, id) => {
    const filteredArray = array?.filter((item) => item.id === id);
    return filteredArray?.length;
  };
  const totalPrice = () => {
    const allPrices = [];
    cart.forEach((element) => {
      allPrices.push(element.price);
    });
    const total = allPrices.reduce((partialSum, a) => partialSum + a, 0);
    return total;
  };

  return (
    <div className={cn.cartSideMenuContainer}>
      <div className={cn.titleRow}>
        <div className={cn.cartTitle}>Iepirkumu Grozs</div>
        <FaTimes
          style={{ cursor: "pointer" }}
          onClick={() => handleCartClose()}
        />
      </div>
      <div className={cn.cartSideMenuItemListContainer}>
        {filteredCart.map((item) => {
          return (
            <div className={cn.cartSideMenuItem}>
              <section>
                <img
                  src={item.image}
                  className={cn.cartSideMenuItemImage}
                  alt="Shopping Item"
                />
              </section>
              <section>
                <div className={cn.cartSideMenuItemName}>{item.name}</div>
                <div className={cn.quantitySelectorRow}>
                  <AiOutlineMinus
                    className={cn.addRemove}
                    onClick={() => dispatch(itemRemoved(item.id))}
                  />
                  <div className={cn.itemCount}>
                    {countItems(cart, item.id)}
                  </div>
                  <AiOutlinePlus
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
                  />
                </div>
              </section>
              <section className={cn.thirdSection}>
                <div className={cn.cartItemPrice}>Cena</div>
                <div className={cn.cartItemSideMenuPriceNumber}>
                  €{countItems(cart, item.id) * item.price}
                </div>
              </section>
            </div>
          );
        })}
      </div>
      <div className={cn.totalAmmount}>
        {cart?.length > 0 ? (
          <NavLink to="/cart">
            <div onClick={() => handleCartClose()}>Apskatīt Grozu</div>
          </NavLink>
        ) : (
          <div>Iepirkumu grozs ir tukšs</div>
        )}
        <div>Kopā: €{totalPrice()}</div>
      </div>
    </div>
  );
};
