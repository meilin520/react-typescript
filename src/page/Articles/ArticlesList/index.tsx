import React, { useEffect, useState } from 'react'
import DataTable from '@/components/DataTable';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Space, Tag, theme } from 'antd';
import { ArticlesType } from '@/types/articlesType';
import { ColumnsType } from 'antd/es/table';
import { ArticlesRequestType } from '@/types/articlesType';

const { Option } = Select;

const AdvancedSearchForm: React.FC = () => {
    const { token } = theme.useToken();
    const [form] = Form.useForm();
    const [expand, setExpand] = useState(false);
  
    const formStyle = {
      maxWidth: 'none',
      background: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      padding: 24,
    };
  
    const getFields = () => {
      const count = expand ? 10 : 6;
      const children = [];
      for (let i = 0; i < count; i++) {
        children.push(
          <Col span={8} key={i}>
              <Form.Item
                name={`field-${i}`}
                label={`Field ${i}`}
                rules={[
                  {
                    required: true,
                    message: 'Input something!',
                  },
                ]}
              >
                {i % 3 !== 1 ? (
                  <Input placeholder="placeholder" />
                ) : (
                  <Select defaultValue={"2"}>
                    <Option value="1">1</Option>
                    <Option value="2">
                      longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong
                    </Option>
                  </Select>
                )}
              </Form.Item>
          </Col>,
        );
      }
      return children;
    };
  
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
  
    return (
      <Form form={form} name="advanced_search" style={formStyle} onFinish={onFinish}>
        <Row gutter={24}>{getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => {
                form.resetFields();
              }}
            >
              Clear
            </Button>
            <a
              style={{ fontSize: 12 }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? <UpOutlined /> : <DownOutlined />} Collapse
            </a>
          </Col>
        </Row>
      </Form>
    );
};

const columns: ColumnsType<ArticlesType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags?tags.split(',').map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        }):null}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.title}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: ArticlesType[] = [];

interface ArticlesListProps {
  articles: ArticlesType[];
  onGetArticle: (params: ArticlesRequestType) => void;
}

const onPaginationChange = ()=>{

}

const ArticlesList: React.FC<ArticlesListProps> = ({onGetArticle}) =>{

  useEffect(()=>{
    let params:ArticlesRequestType  = {
      author: '',
      title: '',
      tagId: '',
      categoryId: '',
      pageNo: 1,
      pageSize: 10,
    }

    console.log(onGetArticle,88888);
    

    onGetArticle(params);
  })

    return (
        <div className='ArticlesList'>
            <DataTable searchBlock={<AdvancedSearchForm />} columns={columns} data={data} onPaginationChange={onPaginationChange} />
        </div>
    )
}

export default ArticlesList;

