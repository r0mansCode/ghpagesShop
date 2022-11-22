import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import latvianFlag from "../../assets/images/latvianFlag.jpg";
import { AiOutlineShopping } from "react-icons/ai";
import classes from "./NavBar.module.css";
import { useSelector } from "react-redux";
import { CartSideMenu } from "../cart-side-menu/CartSideMenu";

export const NavBar = () => {
  const products = useSelector((state) => state.products);
  const headerRef = React.createRef();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(
    getWindowSize().innerWidth < 600 ? 1 : 0
  );
  // const [opacity, setOpacity] = useState(windowSize.innerWidth > 600 ? 1 : 0);
  console.log(getWindowSize().innerWidth);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const range = 100;
    const offset = headerHeight * 2;

    const didScrollPage = (e) => {
      let calc =
        windowSize.innerWidth > 600
          ? 0 + (window.scrollY - offset + range) / range
          : 1;

      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }

      setOpacity(calc);
    };

    window.addEventListener("scroll", didScrollPage);
    console.log(headerRef.current.clientHeight);
    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);

  const removeDuplicatesArray = () => {
    const arrFilt = products.filter(
      (value, index, self) => index === self.findIndex((t) => t.id === value.id)
    );
    return arrFilt;
  };

  const handleCartClose = (newValue) => {
    setCartIsOpen(false);
  };

  const handleCartOpen = (newValue) => {
    windowSize.innerWidth > 600 && setCartIsOpen(true);
  };

  return (
    <div
      className={classes.container}
      ref={headerRef}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        boxShadow: opacity < 0.5 && "none",
      }}
    >
      <div className={classes.subContainer}>
        <NavLink style={{ color: opacity < 0.5 && "white" }} to="/home">
          Par Mums
        </NavLink>
        <NavLink style={{ color: opacity < 0.5 && "white" }} to="/shop">
          Veikals
        </NavLink>
        <NavLink style={{ color: opacity < 0.5 && "white" }} to="/contacts">
          Kontakti
        </NavLink>
      </div>
      <div className={classes.subContainerSecond}>
        <div
          className={classes.cartIconContainer}
          onMouseOver={() => handleCartOpen()}
          onMouseOut={() => setCartIsOpen(false)}
        >
          <NavLink to="/cart">
            <AiOutlineShopping className={classes.cartIcon} />
            {products?.length > 0 && (
              <div className={classes.productCount}>{products.length}</div>
            )}
          </NavLink>
          {cartIsOpen && (
            <div className={classes.navBarCartContainer}>
              <CartSideMenu
                filteredCart={removeDuplicatesArray()}
                cart={products}
                handleCartClose={() => handleCartClose()}
              />
            </div>
          )}
        </div>
        <img
          className={classes.languageSelector}
          src={latvianFlag}
          alt="Shopping Cart"
        />
      </div>
    </div>
  );
};
