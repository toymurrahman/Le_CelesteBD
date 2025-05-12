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
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
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

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    }
    
  });
console.log(chartData)
  // bar chart data
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // pie chart data
  const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return {name: data.category, value: data.revenue}
    })

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
              Total Revenue
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
              Total Orders
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
      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
