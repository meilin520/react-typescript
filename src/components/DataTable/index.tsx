import React from 'react';
import { Pagination } from 'antd';
import ProtoTable from '../Table';
import "./index.scss";

interface Props {
  searchBlock?: React.ReactNode;
}

const DataTable: React.FC = (props: Props) => {
  return (
    <div className='DataTable'>
      {
        props.searchBlock? (
          <div className='search-box'>
            {props.searchBlock}
          </div>
        ): null
      }
      <div className='table-list'><ProtoTable /></div>
      <div className='pagination'>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}

export default DataTable;