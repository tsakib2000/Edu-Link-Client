import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { BarChart, Bar,  PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaBook, FaUsers, FaClipboardList, FaFileAlt, FaStar } from "react-icons/fa";
import StatCard from "./StatCard";

const Stats = () => {
    const axiosPublic = useAxiosPublic();
    const { data: stats = {} } = useQuery({
        queryKey: ["dashboardStats"],
        queryFn: async () => {
          const { data } = await axiosPublic.get("/dashboardStats");
          return data;
        },
      });
        // Convert Object to Array for Charts
  const barChartData = Object.keys(stats).map((key) => ({
    name: key,
    value: stats[key],
  }));

  const pieChartData = Object.keys(stats).map((key) => ({
    name: key,
    value: stats[key],
  }));

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#ff6666"];
    return (
        <div className="p-6">
        <h2 className="text-3xl font-bold text-center text-[#58a6af]">Dashboard Overview</h2>
  
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 my-6">
          <StatCard title="Booked Sessions" count={stats.bookedSessions} icon={<FaBook className="text-blue-500 text-4xl" />} />
          <StatCard title="Total Users" count={stats.users} icon={<FaUsers className="text-green-500 text-4xl" />} />
          <StatCard title="Total Sessions" count={stats.sessions} icon={<FaClipboardList className="text-yellow-500 text-4xl" />} />
          <StatCard title="Total Materials" count={stats.materials} icon={<FaFileAlt className="text-purple-500 text-4xl" />} />
          <StatCard title="Total Reviews" count={stats.reviews} icon={<FaStar className="text-red-500 text-4xl" />} />
        </div>
  
        <div className="grid lg:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-center">Overview Stats</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-center">Data Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieChartData} dataKey="value" nameKey="name" outerRadius={100} label>
              {pieChartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
      </div>
    );
};

export default Stats;