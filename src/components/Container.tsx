import { useEffect, useState } from 'react';
import Input from './Input';
import Pagination from './Pagination';
import Table from './Table/Table';
import { DashboardData } from '../types/dashboardData';
import { useQuery } from '@tanstack/react-query';
import { dashboardDataService } from '../services/dashboardData.service';

export default function Container() {
  const [tableData, setTableData] = useState<DashboardData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [countPages, setCountPages] = useState<number>(1);
  const [searchParams, setSearchParams] = useState<string>('');

  const { isLoading, data } = useQuery({
    queryKey: ['dashboardData', searchParams],
    queryFn: () => {
      return searchParams.trim() !== ''
        ? dashboardDataService.getBtSearchParam(searchParams)
        : dashboardDataService.getAll();
    },
  });

  useEffect(() => {
    if (data) {
      setCountPages(Math.ceil(data.length / 5));
      updateTableData(data, currentPage);
    }
  }, [data, currentPage]);

  function updateTableData(data: DashboardData[], currentPage: number) {
    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    const pageData = data.slice(startIndex, endIndex);
    setTableData(pageData);
  }

  return (
    <div
      className="bg-mainBackground text-textColor py-6 rounded flex flex-col justify-between"
      style={{ width: '1112px', minHeight: '560px' }}
    >
      <h2 className="text-white text-3xl mx-6 mb-4">Opportunities (7)</h2>
      <Input setSearchParams={setSearchParams} />
      <div className="flex-grow">
        <Table dashboardData={tableData} isLoading={isLoading} />
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={countPages} />
    </div>
  );
}
