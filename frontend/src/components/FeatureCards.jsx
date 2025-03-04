import React, { useState } from "react";
import {
  StarFilled,
  StarOutlined,
  HeartFilled,
  HeartOutlined,
  ShoppingOutlined,
  ShoppingFilled,
} from "@ant-design/icons";
import Cart from "../assets/Cart";
import { Link } from "react-router-dom";
import "./pages/home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../store/reducers/wishListItems";
import { addToCart, removeFromCart } from "../store/reducers/cartItems";
import { toast } from "react-hot-toast";

const FeatureCards = ({ img, header, price, reviewCount, id }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state?.wishlists?.wishlistItems);
  const cartItems = useSelector((state) => state?.cartlists?.cartItems);
  const [wishIcon, setWishIcon] = useState(false);
  const [cartIcon, setCartIcon] = useState(false);

  const addToWishlistHandler = () => {
    const isInWishlist = wishlistItems.some((item) => item.id === id);

    if (isInWishlist) {
      dispatch(removeFromWishlist({ id, img, header, price, reviewCount }));
    } else {
      dispatch(addToWishlist({ id, img, header, price, reviewCount }));
    }
    setWishIcon(!wishIcon);
  };

  const addToCartHandler = () => {
    const isInCart = cartItems.some((item) => item.id === id);

    if (isInCart) {
      toast.error("Already added!", {
        duration: 4000,
        style: {
          border: "1px solid black",
          backgroundColor: "black",
          color: "white",
        },
      });
    } else {
      dispatch(addToCart({ id, img, header, price, reviewCount, quantity: 1 }));
    }
    setCartIcon(!cartIcon);
  };

  return (
    <div className="w-[320px] flex justify-center items-center group rounded-[5px] mt-[20px] mx-auto hover:cursor-pointer relative">
      <div className="absolute top-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white group-hover:rounded-[100%] ml-[20px] mt-[14px]">
        <button
          onClick={() => {
            addToWishlistHandler();
          }}
          className="h-[45px] w-[45px]"
        >
          {wishlistItems.some((item) => item.id === id) ? (
            <HeartFilled className="heart-icon" />
          ) : (
            <HeartOutlined className="heart-icon" />
          )}
        </button>
      </div>
      <div className="absolute top-0 right-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200  group-hover:rounded-[100%] mr-[20px] mt-[14px]">
        <button
          onClick={() => addToCartHandler()}
          className="h-[45px] w-[45px]"
        >
          {cartItems.some((item) => item.id === id) ? (
            <ShoppingFilled className="heart-icon" />
          ) : (
            <ShoppingOutlined className="heart-icon" />
          )}
        </button>
      </div>
      <Link to={`/product-detail/${id}`}>
        <div
          style={{
            backgroundColor: "#FBFBFB",
            border: "1px solid #EDEDED",
            borderRadius: "5px",
          }}
          className="pb-5"
        >
          <img src={img} className="bg-transparent h-[253px] mx-auto" alt="dp" />
          <div className="h-[116px] w-[292px] px-[20px] mt-[20px] flex flex-col gap-[10px]">
            <h1 key={id} className="text-[18px] font-[550] font-dmsans leading-[21.78px] w-[251px] h-[24px]">
              {header}
            </h1>
            <div className="w-[100px] mt-[15px] gap-[12px] flex justify-between">
              {[...Array(4)].map((_, index) => (
                <StarFilled key={index} />
              ))}
              <StarOutlined key={5} />
              <p className="text-[12px] leading-[14.52px] font-[400] font-dmsans">
                {reviewCount}
              </p>
            </div>
            <p className="my-1 font-normal text-base font-dmsans ">{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeatureCards;
