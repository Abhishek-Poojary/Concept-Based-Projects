import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ExpenseChartProps {
  data: { month: string; amount: number }[];
}

function ExpenseChart ({ data }:ExpenseChartProps)  {
  return (
    <div>
      <h3>Monthly Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#3498db" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;