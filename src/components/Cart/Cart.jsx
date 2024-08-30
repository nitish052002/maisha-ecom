import "./cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";

import { removeProductFromCart } from "../../ReduxStore/Features/cartSlice";

function Cart({ active, hideCart }) {
  const cart_products = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <div
      className={
        active
          ? "cart_container active bg-white py-auto px-5 relative"
          : "cart_container  bg-lime-100 py-10 px-5 relative"
      }
    >
      <div
        className="absolute top-0 end-0  text-black	 cursor-pointer	 p-2 "
        onClick={hideCart}
      >
        <CloseOutlinedIcon fontSize="large" />
      </div>

      <div className="font-bold text-center text-2xl py-5">My Cart</div>
      <div className="wrapper flex flex-col gap-4   justify-between overflow-y">
        {cart_products &&
          cart_products.map((prd) => (
            <div
              className="product_wrapper flex items-center bg-white  rounded-lg shadow-md"
              key={prd.id}
            >
              <div className="prd_img rounded-lg">
                <img src={prd.image_url} alt="" />
              </div>
              <div className="content flex-1 flex justify-between items-center p-5">
                <div className="">
                  <div className="prd_name  text-lg text-wrap">{prd.title}</div>
                  <div className="prd_price text-lg font-bold">
                    Rs.{prd.price}
                  </div>
                </div>
                <div className="delete_btn cursor-pointer">
                  <DeleteIcon onClick={() => removeProduct(prd.id)} />
                </div>
              </div>
            </div>
          ))}
        <div>
          <div className="total_mnt text-end font-bold text-2xl p-4">
            <div className="flex justify-between items-center">
              <span>Total Amount :</span>{" "}
              <span>
                Rs.
                {cart_products.length
                  ? cart_products
                      .map((prd) => prd.price)
                      .reduce((total, num) => total + Math.round(num), 0)
                  : 0}
              </span>
            </div>
          </div>
          <div className="checkout_btn bg-black text-white font-bold text-lg rounded-md px-4 py-3 ">
            <button>Checkout</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Cart;
