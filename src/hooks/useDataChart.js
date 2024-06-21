import { useState } from "react";
import useData from "../context/useData";

const useDataChart = () => {
  const { data } = useData();
  const [chartType, setChartType] = useState('bar');

  const userPosts = data.reduce((acc, { userId }) => {
    acc[userId] = (acc[userId] || 0) + 1;
    return acc;
  }, {});
  
  const chartData = Object.entries(userPosts).map(([userId, count]) => ({
    name: `User ${userId}`,
    Posts: count,
  }));

  return {chartData, chartType, setChartType};
};

export default useDataChart;