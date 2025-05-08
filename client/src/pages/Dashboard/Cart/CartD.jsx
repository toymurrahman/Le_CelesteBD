import React from "react";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "./../../../hooks/useCart";
import AllButtons from "./../../../components/shared/AllButtons";
import SectionTitle from "./../../../components/shared/SectionTitle";
import { Link } from "react-router-dom";

const CartD = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="m-4">
      <SectionTitle
        heading={"Wanna add more?"}
        subHeading={"My Cart"}
      ></SectionTitle>
      {/* table section */}
      <div className="p-4 mx-auto text-gray-900  bg-gray-50 shadow-lg rounded ">
        <div className="flex text-sm justify-between items-center border-b pb-4 mb-4">
          <div className=" font-semibold">TOTAL ORDERS: {cart.length}</div>
          <div className=" font-semibold">
            TOTAL PRICE: ${totalPrice.toFixed(2)}
          </div>
          {cart.length ? (
            <Link to={"/dashboard/payment"}>
              <AllButtons text="PAY" />
            </Link>
          ) : (
            <Link to={"/dashboard/payment"}>
              <AllButtons disable={!cart.length} text="PAY" />
            </Link>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-600 text-white  uppercase text-sm">
                <th className="p-3 ">Qty</th>
                <th className="p-3 ">Item Image</th>
                <th className="p-3 ">Item Name</th>
                <th className="p-3 ">Price</th>
                <th className="p-3  text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              {cart.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </td>
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">${item.price.toFixed(1)}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-600 hover:bg-red-700 p-2 rounded text-white"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartD;
