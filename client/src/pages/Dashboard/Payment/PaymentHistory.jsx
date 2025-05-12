import SectionTitle from "../../../components/shared/SectionTitle";
import usePaymentHistory from "../../../hooks/usePaymentHistory";

const PaymentHistory = () => {
  const [payments] = usePaymentHistory();
  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"your Transactions"}
          heading={"Payments History"}
        />
      </div>
      <div className="bg-gray-50 text-gray-900 p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          Total Users: <span>{payments.length}</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-600 text-white uppercase text-sm">
                <th className="p-3 rounded-tl-xl "></th>
                <th className="p-3 ">Price</th>
                <th className="p-3">Transaction</th>
                <th className="p-3 rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="p-3 font-semibold">{index + 1}</td>
                  <td className="p-3">$ {payment.price}</td>
                  <td className="p-3">{payment.transactionId}</td>
                  <td className="p-3">{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
