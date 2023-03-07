import React, { useCallback, useEffect, useState } from 'react'
import DataTable from '@/components/DataTable';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Space, Tag, theme } from 'antd';
import { ArticlesResponseType, ArticlesType } from '@/types/articlesType';
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
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: '简介',
    dataIndex: 'introduction',
    key: 'introduction',
    width: 200,
  },
  {
    title: '缩略图',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    render: (_, { thumbnail }) => (
      <>
        <img src={thumbnail} width={150} height={80} alt="" />
      </>
    )
  },
  {
    title: '分类',
    dataIndex: 'categoryName',
    key: 'categoryName',
  },
  {
    title: '标签',
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
    title: '创建日期',
    dataIndex: 'createDate',
    key: 'createDate',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const data: ArticlesType[] = [];

interface ArticlesListProps {
  articles: ArticlesResponseType;
  onGetArticle: (params: ArticlesRequestType) => void;
}

const ArticlesList = ({articles, onGetArticle}: ArticlesListProps) =>{
  const [requestParams, setRequestParams] = useState<ArticlesRequestType>({
      author: '',
      title: '',
      tagId: '',
      categoryId: '',
      pageNo: 1,
      pageSize: 10,
  });

  // 获取文章数据
  const getArticleCallback = useCallback((pageNo:number, pageSize:number)=>{
    onGetArticle({...requestParams, pageNo, pageSize});
  },[onGetArticle, articles, requestParams])

  useEffect(()=>{
    getArticleCallback(requestParams.pageNo,requestParams.pageSize)
    console.log("操作");
    
  },[])

  // 分页操作
  const onPaginationChange = (curr:number, size: number): void => {
    getArticleCallback(curr, size);
  }

    return (
        <div className='ArticlesList'>
            <DataTable paginationOptions={{defaultCurrent: requestParams.pageNo, total: articles.total}} searchBlock={<AdvancedSearchForm />} columns={columns} data={articles.list} onPaginationChange={onPaginationChange} />
        </div>
    )
}

export default ArticlesList;

