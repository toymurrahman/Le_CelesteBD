import React from "react";
import SectionTitle from "./../../../components/shared/SectionTitle";
import useMenu from "./../../../hooks/useMenu";
import { Edit2, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, isLoading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10B981",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure
          .delete(`/menu/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${item.title} has been deleted.`,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"See How many Items u have"}
          heading={"manage all items"}
        />
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          Total Users: <span className="text-emerald-600">{menu.length}</span>
        </h2>
        <div className="overflow-x-auto ">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-600 text-white uppercase text-sm">
                <th className="p-3 rounded-tl-lg "></th>
                <th className="p-3 ">Item Image</th>
                <th className="p-3">Item Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Modify</th>
                <th className="p-3 rounded-tr-lg">Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="p-3 font-semibold">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={item.image}
                      className="w-16 h-16 rounded-md mr-4"
                      alt=""
                    />
                  </td>
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">${item.price}</td>
                  <td className="p-3">
                    <Link to={`/dashboard/updateItem/${item._id || item.id}`}>
                    
                      <button className="bg-emerald-600 ml-2 text-white p-2 rounded">
                        <Edit2 size={16} />
                      </button>
                    </Link>
                  </td>
                  <td className="p-3 ">
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="bg-red-600 ml-2 hover:bg-red-700 p-2 rounded text-white"
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

export default ManageItems;
