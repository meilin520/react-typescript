import React from 'react';
import { Pagination } from 'antd';
import ProtoTable from '../Table';
import "./index.scss";
import { ColumnsType } from 'antd/es/table';
interface DataType {
  [propName: string]: any;
}

interface PaginationOptions {
  defaultCurrent: number;
  total: number;
}
interface DataTableProps {
  paginationOptions: PaginationOptions
  searchBlock?: React.ReactNode;
  columns: ColumnsType<any>;
  data: DataType[];
  onPaginationChange: (page: number, pageSize: number) => void;
}

const DataTable: React.FC<DataTableProps>= ({paginationOptions, searchBlock, columns, data, onPaginationChange}) => {
  
  return (
    <div className='DataTable'>
      {
        searchBlock? (
          <div className='search-box'>
            {searchBlock}
          </div>
        ): null
      }
      <div className='table-list'><ProtoTable columns={columns} data={data} /></div>
      <div className='pagination'>
        <Pagination defaultCurrent={paginationOptions.defaultCurrent = 1} total={paginationOptions.total} onChange={onPaginationChange}/>
      </div>
    </div>
  )
}

export default DataTable;