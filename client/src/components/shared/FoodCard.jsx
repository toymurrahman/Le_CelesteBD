import React from "react";
import AllButtons from "./AllButtons";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const {title,image,price,_id} =item;
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] =useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = () => {
    if(user && user.email){
      const cartItem ={
        menuId: _id,
        email: user.email,
        title,
        image,
        price
      }
      axiosSecure.post(`/carts`,cartItem)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${title} is Added to Cart Successfully`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch the cart
          refetch();
        }
      })
    }
    else{
      Swal.fire({
        title: "User not found",
        text: "Please Login to add to the item into the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}});
        }
      });
    }
  }
  return (
    <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <figure className="relative">
        <img
          className="w-full rounded-2xl h-64 object-cover"
          src={image}
          alt={title}
        />
        <p className="absolute top-3 right-3 text-lg font-semibold bg-emerald-950 bg-opacity-60 text-white px-4 py-1 rounded-md  shadow">
          ${price}
        </p>
      </figure>

      <div className="card-body rounded-md">
        <p>
          {" "}
          {item.date} / {item.category}{" "}
        </p>
        <h2 className="card-title">{title}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-start">
          <div className="mt-2">
            <AllButtons
              onClick={handleAddToCart}
              variant="common-button"
              text="Add To Cart"
              className="uppercase"
            ></AllButtons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
