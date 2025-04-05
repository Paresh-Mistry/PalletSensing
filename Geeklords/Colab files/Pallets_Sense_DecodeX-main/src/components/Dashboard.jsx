import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const Dashboard = ({ riskData, accuracyData, totalRisk, avgAccuracy, totalLostPallets }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Top Metrics Containers */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-semibold text-gray-400">Total Risk Score</h2>
          <p className="text-3xl font-bold text-red-500">{totalRisk}</p>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-semibold text-gray-400">Average Accuracy</h2>
          <p className="text-3xl font-bold text-green-400">{avgAccuracy}%</p>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-lg font-semibold text-gray-400">Total Lost Pallets</h2>
          <p className="text-3xl font-bold text-yellow-400">{totalLostPallets}</p>
        </motion.div>
      </div>

      {/* Risk Score Bar Chart */}
      <div className="flex w-full gap-3">
      <div className="bg-gray-800 p-6 w-1/2 h-[100vh] rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Most Risky Routes</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={riskData}>
            <XAxis dataKey="route" stroke="#ffffff" tick={{ fontSize: 12 }} />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Bar dataKey="riskScore" fill="#FF5733" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Accuracy Bar Chart */}
      <div className="bg-gray-800 p-6 w-1/2 h-30 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Accuracy of Pallet Tracking per Route</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={accuracyData}>
            <XAxis dataKey="route" stroke="#ffffff" tick={{ fontSize: 12 }} />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Bar dataKey="accuracy" fill="#4285F4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
