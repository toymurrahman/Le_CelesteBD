import { useEffect, useState } from "react";
import { MdCancel, MdDone } from "react-icons/md";
import SectionTitle from "../../../components/shared/SectionTitle";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import useUserReservation from "../../../hooks/useUserReservation";

const UserReservation = () => {
  const axiosPublic = useAxiosPublic();

  const [reservation] = useUserReservation();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this reservation?"
    );
    if (!confirmDelete) return;

    axiosPublic
      .delete(`/reservation/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          reservation((prev) => prev.filter((item) => item._id !== id));
        }
      })
      .catch((err) => {
        console.error("Delete failed:", err);
      });
  };

  return (
    <div>
      <SectionTitle
        heading={"Manage Reservations"}
        subHeading={"Reservation History"}
      />

      <div className="p-4 mx-auto text-gray-900 bg-gray-50 shadow-lg rounded">
        <div className="flex text-sm justify-between items-center border-b pb-4 m-4">
          <div className="font-semibold">TOTAL ITEMS: {reservation.length}</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-600 text-white uppercase text-sm">
                <th className="p-3">Qty</th>
                <th className="p-3">User Email</th>
                <th className="p-3">Phone Number</th>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Guests</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              {reservation.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.time}</td>
                  <td className="p-3">{item.guests}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 hover:bg-red-700 p-1 rounded text-white"
                    >
                      <MdCancel size={16} />
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

export default UserReservation;
