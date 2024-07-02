import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
    <h2 className="text-2xl text-center mb-4 font-bold">Payments History</h2>
    <div className="overflow-x-auto">
      <table className="table-auto w-full min-w-full lg:min-w-[600px]">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-2 lg:px-4 py-2 text-left">#</th>
            <th className="px-2 lg:px-4 py-2 text-left">Price</th>
            <th className="px-2 lg:px-4 py-2 text-left">Transaction Id</th>
            <th className="px-2 lg:px-4 py-2 text-left">User Email</th>
            <th className="px-2 lg:px-4 py-2 text-left">Date</th>
            <th className="px-2 lg:px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment._id} className="hover:bg-gray-100">
              <td className="border px-2 lg:px-4 py-2">{index + 1}</td>
              <td className="border px-2 lg:px-4 py-2">${payment.price}</td>
              <td className="border px-2 lg:px-4 py-2">{payment.transactionId}</td>
              <td className="border px-2 lg:px-4 py-2">{payment.email}</td>
              <td className="border px-2 lg:px-4 py-2">
                {new Date(payment.date).toLocaleDateString()}
              </td>
              <td className="border px-2 lg:px-4 py-2">{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
};

export default PaymentHistory;
