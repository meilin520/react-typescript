import React from 'react';
import { Pagination } from 'antd';
import ProtoTable from '../Table';
import "./index.scss";
import { ColumnsType } from 'antd/es/table';
interface DataType {
  [key: string]: any;
}
interface DataTableProps {
  searchBlock?: React.ReactNode;
  columns: ColumnsType<DataType>;
  data: DataType[];
  onPaginationChange: (page: number, pageSize: number) => void;
}

const DataTable: React.FC<DataTableProps>= ({searchBlock, columns, data, onPaginationChange}) => {
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
        <Pagination defaultCurrent={1} total={50} onChange={onPaginationChange}/>
      </div>
    </div>
  )
}

export default DataTable;