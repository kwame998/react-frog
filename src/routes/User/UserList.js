import React, {Fragment, PureComponent} from 'react';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
const statusMap = ['default', 'success'];
const status = ['不可用', '可用'];

export default class UserListList extends PureComponent {
  state = {
    selectedRows: [],
    // 搜索条件字段
    searchFields: {
    },
    page:{
      //当前页数
      current:1,
      //每页大小
      pageSize:20,
    },
    record: {},
  };
  render() {

    return (
      <PageHeaderLayout title="用户列表">


      </PageHeaderLayout>
    );
  }
}
