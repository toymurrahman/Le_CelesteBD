import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/shared/SectionTitle";
import useUserReservation from "../../../hooks/useUserReservation";
import usePaymentHistory from "../../../hooks/usePaymentHistory";
import useCart from "../../../hooks/useCart";

const UserHome = () => {
  const { user } = useAuth();
  const [reservation] = useUserReservation();
  const [payments] = usePaymentHistory();
  const [cart] = useCart();
  return (
    <div>
      <SectionTitle
        subHeading={"Hi welcome Back"}
        heading={user?.displayName ? user.displayName : "Unknown"}
      />
      <div className="flex flex-col md:flex-row shadow-md rounded-md overflow-hidden w-full max-w-2xl mx-auto">
        <div className="bg-emerald-100 flex flex-col items-center justify-center p-6 md:w-1/2 text-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-emerald-300 bg-white mb-4"
            src={user?.photoURL}
          />
          <h2 className="text-lg font-semibold text-gray-800">
            {user?.displayName}
          </h2>
        </div>

        <div className="bg-emerald-300 p-6 md:w-1/2 text-left">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Details</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-blue-600 font-medium">
              🛒 <span className="text-gray-800">Orders:</span> {cart.length}
            </li>
            <li className="text-teal-600 font-medium">
              ⭐ <span className="text-gray-800">Reviews:</span> 0
            </li>
            <li className="text-yellow-600 font-medium">
              📅{" "}
              <span className="text-gray-800">
                Reservation: {reservation.length}{" "}
              </span>
            </li>
            <li className="text-orange-600 font-medium">
              💳 <span className="text-gray-800">Payment:</span>{" "}
              {payments.length}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
