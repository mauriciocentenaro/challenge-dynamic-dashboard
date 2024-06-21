import { ResponsiveContainer, BarChart, Bar, CartesianGrid, Tooltip, Legend, LineChart, Line} from 'recharts';
import {  InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import useDataChart from '../hooks/useDataChart';

const DataChart = () => {
  const {chartData, chartType, setChartType} = useDataChart();

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Posts" fill="#8884d8" />
          </BarChart>
        );
      case 'line':
        return (
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Posts" stroke="#8884d8" />
          </LineChart>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <FormControl style={{ marginTop: '20px', minWidth: '150px' }}> 
        <InputLabel id="chart-type-label">Select Chart Type</InputLabel>
        <Select
          labelId="chart-type-label"
          id="chart-type-select"
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          label="Select Chart Type"
        >
          <MenuItem value="bar">Bar Chart</MenuItem>
          <MenuItem value="line">Line Chart</MenuItem>
        </Select>
      </FormControl>
      <ResponsiveContainer width="100%" height={400}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default DataChart;
