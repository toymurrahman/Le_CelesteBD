import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/shared/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "./../../../hooks/useAuth";
import {
  FaClipboardList,
  FaDollarSign,
  FaRegMinusSquare,
  FaUserShield,
} from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        subHeading={"Welcome to the Admin Dashboard"}
        heading={user?.displayName ? user.displayName : "Unknown"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
        {/* total user */}
        <div
          className={
            "rounded-xl shadow-md p-5 flex items-center gap-4 transition duration-300 bg-blue-200 dark:bg-blue-900"
          }
        >
          <div>
            <FaUserShield className="text-3xl text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h4 className="text-gray-600 dark:text-gray-300 text-sm font-semibold">
              Total Users
            </h4>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {stats.users}
            </p>
          </div>
        </div>
        {/* total revenue */}
        <div
          className={
            "rounded-xl shadow-md p-5 flex items-center gap-4 transition duration-300 bg-green-200 dark:bg-green-900 "
          }
        >
          <div>
            <FaDollarSign className="text-3xl text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h4 className="text-gray-600 dark:text-gray-300 text-sm font-semibold">
              Total Users
            </h4>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {stats.revenue}
            </p>
          </div>
        </div>

        {/* order */}
        <div
          className={
            "rounded-xl shadow-md p-5 flex items-center gap-4 transition duration-300 bg-yellow-100 dark:bg-yellow-900 "
          }
        >
          <div>
            {" "}
            <FaClipboardList className="text-3xl text-yellow-600 dark:text-yellow-400 " />
          </div>
          <div>
            <h4 className="text-gray-600 dark:text-gray-300 text-sm font-semibold">
              Total Users
            </h4>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {stats.orders}
            </p>
          </div>
        </div>

        {/* products */}
        <div
          className={
            "rounded-xl shadow-md p-5 flex items-center gap-4 transition duration-300 bg-purple-200 dark:bg-purple-900 "
          }
        >
          <div>
            <FaRegMinusSquare className="text-3xl text-blue-600 dark:text-blue-400 " />
          </div>
          <div>
            <h4 className="text-gray-600 dark:text-gray-300 text-sm font-semibold">
              Products
            </h4>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {stats.products}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
