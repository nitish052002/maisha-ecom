import React from "react";
import "./card.css";
import StarIcon from "@mui/icons-material/Star";
import notfound from "../../assets/notFOund.webp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../ReduxStore/Features/cartSlice";

function ProductCard({
  title,
  imageurl,
  price,
  id,
  heartActive,
  setWishListTrue,
  productsList,
}) {
  const dispatch = useDispatch();
  const cart_products = useSelector((state) => state.carts);

  const addProductInCart = (id) => {
    const product = productsList.find((prd) => prd.id === id);
    dispatch(
      addProductToCart(product)
    );
    console.log(cart_products)
  };

  return (
    <div className="product_card rounded-lg  overflow-hidden bg-white relative mx-1 md:mx-5">
      <img src={imageurl ? imageurl : notfound} alt="" />
      <div
        className={heartActive ? "wishlist_button active" : "wishlist_button"}
        onClick={() => setWishListTrue(id)}
      >
        <span>
          <FavoriteBorderIcon />
        </span>
      </div>
      <div className="body_content px-4">
        <div className=" text-1xl text-nowrap py-3">{title}</div>
        <div className="md:text-2xl text-lg font-bold">Rs.{price}</div>
        <div className="ratings flex items-center  flex-wrap  md:flex-nowrap">
          <div className="flex items-center">
            <span className="star">
              <StarIcon />
            </span>
            <span className="star">
              <StarIcon />
            </span>
            <span className="star">
              <StarIcon />
            </span>
            <span className="star">
              <StarIcon />
            </span>
            <span className="star">
              <StarIcon />
            </span>
          </div>
          <span className=" my-2 text-white px-3 py-1  md:ms-2 text-sm font-bold bg-green-700 rounded">
            4.5
          </span>
          <span className="ms-2   font-bold  ">(234)</span>
        </div>
      </div>

      <button
        className="text-center font-bold text-white p-2 md:p-4 bg-black rounded-md mt-5"
        onClick={() => {
          addProductInCart(id);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
