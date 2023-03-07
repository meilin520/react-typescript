import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType{
  [key: string]: any;
}

interface ProtoTableProps{
  columns: ColumnsType<DataType>;
  data: DataType[];
}

const ProtoTable: React.FC<ProtoTableProps> = ({columns, data}) => <Table<DataType> columns={columns} dataSource={data} pagination={false}/>;

export default ProtoTable;