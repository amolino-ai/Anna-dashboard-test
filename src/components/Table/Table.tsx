import AlertTriangle from '../IconComponents/AlertTriangle';
import TableBtn from './TableBtn';
import { DashboardData } from '../../types/dashboardData';
import LineChartComponent from '../ChartComponent';
import Loading from '../Loading';

interface TableProps {
  dashboardData: DashboardData[];
  isLoading: boolean;
}

export default function Table({ dashboardData, isLoading }: TableProps) {
  if (!dashboardData || dashboardData.length === 0) {
    return (
      <div className="flex items-center justify-center mt-4">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  if(isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="mt-4 w-full">
      <table className="min-w-full bg-transparent">
        <thead>
          <tr className="text-xs text-white uppercase tracking-wider">
            <th className="pr-4 pl-6 text-start font-light w-56">OPPORTUNITY</th>
            <th className="p-1 font-light flex items-center justify-between w-96">
              <span>OUTSTANDING ACTIONS</span><span>LAST RESPONSE</span><span>NEXT MILESTONE</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {dashboardData &&
            dashboardData.length > 0 &&
            dashboardData.map((data, index) => {
              const chartData = [
                { name: 'A', value: data['outstanding-actions-0'] },
                { name: 'B', value: data['outstanding-actions-1'] },
                { name: 'C', value: data['outstanding-actions-2'] },
                { name: 'D', value: data['outstanding-actions-3'] },
                { name: 'E', value: data['outstanding-actions-4'] },
                { name: 'F', value: data['outstanding-actions-5'] },
                { name: 'G', value: data['outstanding-actions-6'] },
              ];
              return (
                <tr key={index} className="group hover:bg-transparent border-b border-borderGrayColor">
                  <td className="pr-4 pl-6 w-52">
                    <div className="flex items-center  gap-2">
                      {data.Blockers && <AlertTriangle />}
                      {data.Name}
                    </div>
                  </td>
                  <td className="px-1 py-4 flex items-center gap-2">
                    <LineChartComponent chartData={chartData} />

                    <span>{data.LastResponse}</span>
                    <span>{data.NextMilestone}</span>
                  </td>

                  <td className="px-6 py-4 relative ml-auto text-right w-64">
                    <TableBtn></TableBtn>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
