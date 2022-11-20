import "./CartSideMenu.css";
import { useDispatch } from "react-redux";
import { itemAdded, itemRemoved } from "../../features/counter/counterSlice";

export const CartSideMenu = ({ cart, filteredCart }) => {
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
    <div className="cartSideMenuContainer">
      <div className="cartTitle">Iepirkuma Grozs</div>
      <div className="cartSideMenuItemListContainer">
        {filteredCart.map((item) => {
          return (
            <div className="cartSideMenuItem">
              <section>
                <img
                  src={item.image}
                  className="cartSideMenuItemImage"
                  alt="Shopping Item"
                />
              </section>
              <section>
                <div className="cartSideMenuItemName">{item.name}</div>
                <div className="quantitySelectorRow">
                  <div
                    className="addRemove"
                    onClick={() => dispatch(itemRemoved(item.id))}
                  >
                    -
                  </div>
                  {countItems(cart, item.id)}
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
                <div className="cartItemPrice">Cena</div>
                <div className="cartItemSideMenuPriceNumber">
                  €{countItems(cart, item.id) * item.price}
                </div>
              </section>
            </div>
          );
        })}
      </div>
      <div className="totalAmmount">Kopā: €{totalPrice()}</div>
    </div>
  );
};
