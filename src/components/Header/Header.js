import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import CartOverlay from "../CartOverlay/CartOverlay";
// import CurrencySwitcher from "../CurrencySwitcher";

import s from "./Header.module.css";

export default class Header extends Component {
  state = {
    visible: false,
    showModal: false,
  };

  toggleCurrency = () => {
    this.setState((prev) => ({
      visible: !prev.visible,
    }));
  };
  toggleCart = () => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
    }));
  };
  render() {
    return (
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeLink : s.nav__link
            }
            to="/"
          >
            Women
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeLink : s.nav__link
            }
            to="/Man"
          >
            Man
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeLink : s.nav__link
            }
            to="/Kids"
          >
            Kids
          </NavLink>
        </nav>
        <div>
          <a href="/" className={s.logo}>
            <span className={s.logo__text}>Logo</span>
          </a>
        </div>
        <div className={s.buttons}>
          <button type="button" className={s.currency__btn}>
            $
          </button>

          <button type="button" className={s.cart__btn}></button>
        </div>

        {/* <div className={s.buttons}>
          <button
            type="button"
            onClick={this.toggleCurrency}
            className={s.currency__btn}
          >
            $
          </button>
          {this.state.visible && <CurrencySwitcher />}
          <button
            type="button"
            onClick={this.toggleCart}
            className={s.cart__btn}
          ></button>
          {this.state.showModal && <CartOverlay />}
        </div> */}
      </header>
    );
  }
}
