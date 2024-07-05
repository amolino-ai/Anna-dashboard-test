import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

interface LineChartComponentProps {
  chartData: { name: string; value: number }[];
}

export default function LineChartComponent({ chartData }: LineChartComponentProps) {
  return (
    <div style={{ width: '68px', height: '24px' }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
