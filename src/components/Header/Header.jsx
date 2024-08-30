import React, { useState } from "react";
import brandLogo from "../../assets/logo.png";
import "./header.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [cartToggler, setCartToggler] = useState(false);
  const cart_products = useSelector((state) => state.carts);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const cartTogglerHandler = () => {
    setCartToggler(!cartToggler);
  };

  return (
    <header className="sticky top-0 left-0 z-50">
      <div
        className={toggle ? "black_bg relative active" : "black_bg relative"}
      >
        <div
          className="absolute top-0 end-0  text-neutral-50	 cursor-pointer	 p-2 "
          onClick={toggleHandler}
        >
          <CloseOutlinedIcon fontSize="large" />
        </div>
        <div className={toggle ? "side_bar active" : "side_bar"}>
          <div className="flex justify-between p-4 gap-3 login_top">
            <div className=" flex items-center justify-between gap-3">
              <div className="bg-white user_profile ">
                <button>
                  <AccountCircleOutlinedIcon fontSize="large" />
                </button>
              </div>

              <span className=" text-nowrap text-white">Hi Guest</span>
            </div>

            <button
              className=" text-md py-3 font-bold bg-white rounded"
              id="login_btn"
            >
              Login
            </button>
          </div>

          <nav className="text-nowrap pt-2 ">
            <ul className="">
              <li className="text-lg text-nowrap font-medium text-start font-semibold py-3 text-neutral-500	 px-10">
                Categories
              </li>
              <li className="text-lg text-nowrap font-medium text-start font-semibold py-3 text-neutral-500	 px-10">
                Best Seller
              </li>
              <li className="text-lg text-nowrap font-medium text-start font-semibold py-3 text-neutral-500	 px-10">
                Deals
              </li>
              <li className="text-lg text-nowrap font-medium text-start font-semibold py-3 text-neutral-500	 px-10">
                New
              </li>
              <li className="text-lg text-nowrap font-medium text-start font-semibold py-3 text-neutral-500	 px-10">
                Delivery
              </li>
              <hr />
              <li className="text-lg text-nowrap font-medium text-start font-semibold py-3 text-neutral-500	 px-10">
                My account
              </li>
              <li className="text-lg text-nowrap font-medium text-start font-semibold py-3 text-neutral-500	 px-10">
                Contact Us
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex items-center header_wrapper justify-between bg-white   px-20 sticky ">
        <div className="menu" onClick={toggleHandler}>
          <MenuOutlinedIcon fontSize="large" />
        </div>
        <div className="logo">
          <img src={brandLogo} alt="brand_logo" />
        </div>
        <div className="flex text-nowrap justify-center w-100 items-center gap-5">
          <nav className="flex text-nowrap justify-center items-center navigation">
            <ul className="flex text-nowrap justify-center items-center">
              <li className="text-lg text-nowrap font-medium text-center text-neutral-500	 px-4">
                Categories
              </li>
              <li className="text-lg text-nowrap font-medium text-center text-neutral-500	 px-4">
                Best Seller
              </li>
              <li className="text-lg text-nowrap font-medium text-center text-neutral-500	 px-4">
                Deals
              </li>
              <li className="text-lg text-nowrap font-medium text-center text-neutral-500	 px-4">
                New
              </li>
              <li className="text-lg text-nowrap font-medium text-center text-neutral-500	 px-4">
                Delivery
              </li>
            </ul>
          </nav>

          <div className="flex search_input">
            <div className="px-5 py-2   search_box rounded-md   flex items-center bg-slate-100	">
              <input
                type="text"
                placeholder="Search your product"
                name="search"
              />
              <div>
                <SearchOutlinedIcon />
              </div>
            </div>
          </div>

          <div className="login_and_cart flex justify-center gap-3 ">
            <div>
              <button className="text-stone-950		">
                <FavoriteBorderOutlinedIcon fontSize="large" />
                <span className="text-md ps-2 btn_lbl">Wishlist</span>
              </button>
            </div>

            <div className="relative account_dropdown_container">
              <button id="account_btn" className="text-stone-950		">
                <AccountCircleOutlinedIcon fontSize="large" />
                <span className="text-md ps-2 btn_lbl">Account</span>
              </button>

              <div className="bg-white absolute right-0 mt-2 rounded-md shadow-lg dropdown   md:block w-64 md:w-56 lg:w-72">
                <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>

                <ul className="flex flex-col profile_dropdown z-50">
                  <li className="flex items-center text-start font-medium text-base py-4 px-5 text-gray-600 cursor-pointer">
                    <span className="px-4">
                      <AccountCircleIcon />
                    </span>
                    <span>Login/Register</span>
                  </li>
                  <hr />
                  <li className="flex items-center text-start font-medium text-base py-4 px-5 text-gray-600 cursor-pointer">
                    <span className="px-4">
                      <PersonIcon />
                    </span>
                    <span>My Account</span>
                  </li>
                  <hr />
                  <li className="flex items-center text-start font-medium text-base py-4 px-5 text-gray-600 cursor-pointer">
                    <span className="px-4">
                      <TakeoutDiningIcon />
                    </span>
                    My Orders
                  </li>
                  <hr />
                  <li className="flex items-center text-start font-medium text-base py-4 px-5 text-gray-600 cursor-pointer">
                    <span className="px-4">
                      <SupportAgentIcon />
                    </span>
                    <span>Contact Us</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <button onClick={cartTogglerHandler} className="relative text-stone-950		">
                {cart_products.length ? (
                  <span className="text-white cart_tooltip">
                    {cart_products.length}
                  </span>
                ) : (
                  <></>
                )}
                <ShoppingCartOutlinedIcon fontSize="large" />
                <span className="text-md ps-2 btn_lbl">Cart</span>
              </button>
              <div
                className={
                  cartToggler
                    ? "cart_black_bg active relative"
                    : "cart_black_bg  relative"
                }
              >
                <Cart
                  active={cartToggler}
                  hideCart={() => {
                    setCartToggler(!cartToggler);
                  }}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4   search_box rounded-md   flex items-center bg-slate-100	  s  mobo_search">
        <div className="pe-2">
          <SearchOutlinedIcon />
        </div>

        <input type="text" placeholder="Search your product" name="search" />
      </div>
    </header>
  );
}

export default Header;
