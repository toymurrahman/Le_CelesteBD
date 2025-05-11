import React from "react";
import AllButtons from "./AllButtons";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { title, image, price, _id, description, date, category } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        title,
        image,
        price,
      };
      axiosSecure.post(`/carts`, cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${title} added to cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Login Required",
        text: "Please log in to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#10b981",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="max-w-sm rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-t-3xl"
        />
        <span className="absolute top-3 right-3 bg-emerald-600 opacity-80 text-white dark:bg-emerald-400 text-sm font-semibold px-4 py-1 rounded-md shadow">
          ${price}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <span className="bg-emerald-600 opacity-80  text-white px-2 py-1 rounded-full font-xs">
            {category}
          </span>
          {date}
        </p>
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description?.split(" ").slice(0, 7).join(" ")}...
        </p>
        <div>
          <AllButtons
            onClick={handleAddToCart}
            variant="common-button"
            text="Add to Cart"
            className="uppercase mt-2 "
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
