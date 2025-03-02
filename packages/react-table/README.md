Table 表格
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-table/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-table.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-table)
[![npm version](https://img.shields.io/npm/v/@uiw/react-table.svg?label=@uiw/react-table)](https://npmjs.com/@uiw/react-table)

表示两种相互对立的状态间的切换，多用于触发「开/关」。选中时的内容支持响应式。

```jsx
import { Table } from 'uiw';
// or
import Table from '@uiw/react-table';
```

### 基本使用

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button } from 'uiw';

const columns = [
  {
    // title: '姓名',
    ellipsis: true, 
    title: ({ key }) => {
      return (
        <span>字段: {key}</span>
      )
    },
    key: 'name', 
  }, {
    title: '年龄',
    style: { color: 'red' },
    key: 'age',
  }, {
    title: '地址',
    key: 'info',
  }, {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
  { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },
  { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },
  { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },
];
const Demo = () => (
  <div>
    <Table columns={columns} data={dataSource} />
  </div>
);
export default Demo
```
### 表头分组

表头分组通过 `columns` 数组中对象的 `children` 来实现，以渲染分组表头。。

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button } from 'uiw';

const columns = [
  {
    title: '姓名',
    style: { color: 'red' },
    key: 'name', 
    children: [
       {
        title: '英文名字',
        width: 100,
        key: 'name_en',
      },
      {
        title: '中文名字',
        key: 'cnname',
        children:[
          {
            title: '姓名',
            style: { color: 'red' },
            key: 'firstname',
            children:[
              { title: '姓', key: 'name1', width: 80 },
              { title: '名',  key: 'name2', width: 80 },
            ]
          }, {
            title: '拼音',
            key: 'lastname',
            children:[
              { title: '姓', key: 'pinyin1', width: 80 },
              { title: '名', key: 'pinyin2', width: 80 },
            ],
          },
        ],
      }, 
    ]
  }, {
    title: '其它',
    key: 'other',
    children:[
      { title: '生日', key: 'birthday', width: 150 },
      { title: '职业', key: 'job', width: 150 },
    ],
  }, {
    title: '操作',
    key: 'edit',
    width: 150,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <span>{text} {key} - {rowNumber} - {columnNumber}</span>
      </div>
    ),
  },
];
const dataSource = [
  { name1: '邓', name2:'紫棋', pinyin1: 'deng', pinyin2: 'ziqi', name_en: 'G.E.M.', birthday: '1991年8月16日', job: '唱作歌手、作曲人', edit:'' },
  { name1: '周', name2:'杰伦', pinyin1: 'zhou', pinyin2: 'jielun', name_en: 'Jay Chou', birthday: '1979年1月18日', job: '歌手、音乐人', edit:'' },
  { name1: '邓', name2:'紫棋', pinyin1: 'deng', pinyin2: 'ziqi', name_en: 'G.E.M.', birthday: '1991年8月16日', job: '唱作歌手、作曲人', edit:'' },
  { name1: '周', name2:'杰伦', pinyin1: 'zhou', pinyin2: 'jielun', name_en: 'Jay Chou', birthday: '1979年1月18日', job: '歌手、音乐人', edit:'' },
];
const Demo = () => (
  <div>
    <Table bordered columns={columns} data={dataSource} />
  </div>
);
export default Demo
```

### 表格行/列合并

表头只支持列合并，使用 `columns` 里的 `colSpan` 进行设置。表格支持行/列合并，使用 `render` 里的单元格属性 `colSpan` 或者 `rowSpan` 设值为 0 时，设置的表格不会渲染。
 
```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button } from 'uiw';

const columns = [
  {
    title: '姓名',
    key: 'name', 
  }, {
    title: '年龄',
    style: { color: 'red' },
    key: 'age',
    colSpan: 2,
    render: (text, key, rowData, rowNum, colNum) => {
      const obj = {
        children: text,
        props: {}
      }
      if (rowNum === 0) {
        obj.props.rowSpan = 2;
      }
      if (rowNum === 1) {
        obj.props.rowSpan = 0;
      }
      return obj;
    }
  }, {
    title: '地址',
    key: 'info',
    colSpan: 0,
  }, {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
  { name: '李易峰', age: '12', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
];
const Demo = () => (
  <div>
    <Table bordered columns={columns} data={dataSource} />
  </div>
);
export default Demo
```


### 标题页脚

添加表格边框线，页头和页脚的展现效果。

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button } from 'uiw';

const columns = [
  {
    title: '姓名',
    style: { color: 'red' },
    key: 'name', 
  }, {
    title: '年龄',
    key: 'age',
  }, {
    title: '地址',
    key: 'info',
  }, {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
  { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },
  { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },
  { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },
];
const Demo = () => (
  <div>
    <Table
      title={(
        <div>
          这里是标题，有边框，<b>bordered=true</b>
        </div>
      )}
      footer={(
        <div>
          这里是页脚 Footer，有边框，<b>bordered=true</b>
        </div>
      )}
      bordered columns={columns} data={dataSource} />
    <Table title="这里是标题，没有边框" footer="这里是页脚 Footer，没有边框" columns={columns} data={dataSource} />
  </div>
);
export default Demo
```

### 点击单元格

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button, Notify } from 'uiw';

const columns = [
  {
    title: '姓名',
    style: { color: 'red' },
    key: 'name', 
  }, {
    title: '年龄',
    key: 'age',
  }, {
    title: '地址',
    key: 'info',
  }, {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
  { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },
  { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },
  { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },
];
const Demo = () => (
  <div>
    <Table
      title="表内容 tbody 单元格点击回调事件"
      onCell={(rowData, { rowNum, colNum }) => {
        console.log('-->3', rowData);
        console.log('-->4', rowNum);
        console.log('-->5', colNum);
        Notify.info({ description: `你点击了"${rowData.name}"。` });
      }}
      columns={columns}
      data={dataSource}
    />
    <Table
      title="表头单元格点击回调事件"
      onCellHead={(rowData, rowNum, columnNumber) => {
        console.log('-->3', rowData);
        console.log('-->4', rowNum);
        console.log('-->5', columnNumber);
        Notify.info({ description: `你点击了"${rowData.title}"。` });
      }}
      onCell={(rowData, { rowNum, colNum }) => {
        console.log('-->3', rowData);
        console.log('-->4', rowNum);
        console.log('-->5', colNum);
        Notify.info({ description: `你点击了"${rowData.name}"。` });
      }}
      columns={columns}
      data={dataSource}
    />
  </div>
);
export default Demo
```

### 原始HTML

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button } from 'uiw';

const Demo = () => (
  <div>
    <Table bordered>
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>详情</th>
          <th>价格</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>土豆</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>萝卜</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>香蕉</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>芝麻</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
      </tbody>
    </Table>
    <Table>
      <caption>没有边框</caption>
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>详情</th>
          <th>价格</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>土豆</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>萝卜</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>香蕉</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
        <tr>
          <td>芝麻</td>
          <td>18</td>
          <td>2009/01/12</td>
          <td>￥86,000</td>
        </tr>
      </tbody>
    </Table>
  </div>
);
export default Demo
```

### 选择和操作

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button, Checkbox, Pagination, Loader } from 'uiw';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 选中的 key
      checked: [],
      loading: false,
      dataSource: [
        { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。' },
        { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人' },
        { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手' },
        { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。' },
        { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。' },
        { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班' },
        { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。' },
      ],
      columns: [
        {
          title: (data, rowNum, colNum) => {
            const indeterminate = this.state.dataSource.length !== this.state.checked.length && this.state.checked.length > 0;
            const checked = this.state.dataSource.length === this.state.checked.length;
            return (
              <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                onClick={(evn) => {
                  let checked = this.state.dataSource.map((item, idx) => idx);
                  if(!evn.target.checked) {
                    checked = [];
                  }
                  this.setState({ checked });
                }}
              />
            );
          },
          key: 'checked',
          render: (text, key, rowData, rowNumber, columnNumber) => {
            return (
              <Checkbox checked={rowData.checked} onClick={this.onClickCheckedItem.bind(this, rowNumber)} />
            );
          }
        }, {
          title: '名字',
          key: 'name',
        }, {
          title: '年龄',
          key: 'age',
        }, {
          title: '地址',
          key: 'info',
        },
      ]
    }
  }
  onClickCheckedItem(rowNumber, env) {
    let { checked } = this.state;
    const isChecked = env.target.checked;
    if(isChecked) {
      // 添加到选中数组中
      checked.push(rowNumber)
      checked = checked.sort((a, b) => a - b);
    } else {
      // 删除选中项
      checked.splice(checked.indexOf(rowNumber), 1);
    }
    this.setState({ checked });
  }
  render() {
    const { checked } = this.state;
    const dataSource = this.state.dataSource.map((item, idx) => {
      const isChecked = checked.indexOf(idx) > -1;
      return { checked: isChecked, ...item };
    });
    return (
      <div>
        <Loader loading={this.state.loading} style={{ display: 'block' }}>
          <Table
            columns={this.state.columns}
            data={dataSource}
            footer={
              <Pagination
                current={2}
                pageSize={10}
                total={30}
                divider
                onChange={(current, total, pageSize) => {
                  this.setState({ loading: true });
                  const timer = setTimeout(() => {
                    // 模拟变更数据
                    const dataSource = this.state.dataSource.map(item => {
                      item.age = Number(item.age) + current;
                      return item;
                    });
                    // 翻页 API 获取数据
                    this.setState({ checked: [], dataSource, loading: false });
                  }, 2000);
                }}
              />
            }
          />
        </Loader>
      </div>
    );
  }
}
export default Demo
```

### 自定义单元格省略提示

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button, Notify, Tooltip } from 'uiw';

const columns = [
  {
    title: 'Name',
    key: 'name',
    render: text => <a>{text}</a>,
    width: 150,
  },
  {
    title: 'Age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    key: 'address',
    ellipsis: true,
    render: address => (
      <Tooltip placement="topLeft" content={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column Long Column Long Column',
    key: 'address',
    ellipsis: true,
    render: address => (
      <Tooltip placement="topLeft" content={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column Long Column',
    key: 'address',
    ellipsis: true,
    render: address => (
      <Tooltip placement="topLeft" content={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: 'Long Column',
    key: 'address',
    ellipsis: true,
    render: address => {
      return (
        <Tooltip placement="topLeft" content={address}>
          {address}
        </Tooltip>
      )
    },
  },
];

const data = [
  { name: '邓紫棋', age: '12', address: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。' },
  { name: '李易峰', age: '32', address: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人' },
  { name: '范冰冰', age: '23', address: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手' },
  { name: '杨幂', age: '34', address: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。' },
  { name: 'Angelababy', age: '54', address: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。' },
  { name: '唐嫣', age: '12', address: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班' },
  { name: '吴亦凡', age: '4', address: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。' },
];

const Demo = () => (
  <div>
    <Table
      title="表内容 tbody 单元格点击回调事件"
      columns={columns}
      data={data}
    />
  </div>
);
export default Demo
```

### 无数据状态

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button, Empty } from 'uiw';

const columns = [
  {
    ellipsis: true, 
    title: '姓名',
    key: 'name', 
  }, {
    title: '年龄',
    key: 'age',
  }, {
    title: '地址',
    key: 'info',
  }, {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [];
const Demo = () => (
  <div>
    <Table
      columns={columns}
      data={dataSource}
      empty={<Empty />}  
    />
  </div>
);
export default Demo
```

### 可展开

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button, Icon } from 'uiw';

const columns = [
  {
    title: '姓名',
    ellipsis: true, 
    key: 'name', 
  }, 
  {
    title: '年龄',
    style: { color: 'red' },
    key: 'age',
  }, 
  {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { name: '邓紫棋', age: '10', id: '1'},
  { name: '李易峰', age: '32', id: '2'},
  { name: '范冰冰', age: '23', id: '3'},
];
const Demo = () => (
  <div>
    <Table 
      rowKey="id"
      expandable={{
        expandedRowRender: (record, index, expanded)=>{
          return <div>{record.name}</div>
        },
        // defaultExpandAllRows: true,
        rowExpandable: (r)=>r.name!=='李易峰',
        expandIcon: (expanded) => expanded ? <Icon type="minus-circle-o"/> : <Icon type="plus-circle-o"/>,
        defaultExpandedRowKeys: ["1"]
      }}
      columns={columns} 
      data={dataSource} 
    />
  </div>
);
export default Demo
```

### 树形数据展示

表格支持树形数据的展示，当数据中有 children 字段时会自动展示为树形表格，如果不需要或配置为其他字段可以用 childrenColumnName 进行配置。

可以通过设置 indentSize 以控制每一层的缩进宽度

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button, Icon } from 'uiw';

const columns = [
  {
    title: '姓名',
    ellipsis: true, 
    key: 'name', 
  }, 
  {
    title: '年龄',
    style: { color: 'red' },
    key: 'age',
  }, 
  {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { 
    name: '邓紫棋', 
    age: '10', 
    id: '1', 
    children: [
      {
        name: '邓紫棋-0-1', 
        age: '10', 
        id: '1-1', 
        children: [
          { 
            name: '邓紫棋-0-1-1', 
            age: '10', 
            id: '1-1-1',
            children: [
              {name: '邓紫棋-0-1-1-1', age: '10', id: '-0-1-1-1'},
              {name: '邓紫棋-0-1-1-2', age: '10', id: '-0-1-1-2'},
              {name: '邓紫棋-0-1-1-3', age: '10', id: '-0-1-1-3'},
            ]
          },
          { name: '邓紫棋-0-1-2', age: '10', id: '1-1-2',}
        ]
      },
      {name: '邓紫棋-0-2', age: '10', id: '1-1'},
      {name: '邓紫棋-0-3', age: '10', id: '1-1'},
    ]
  },
  { name: '李易峰', age: '32', id: '2',},
  { name: '范冰冰', age: '23', id: '3', 
    children: [
      {name: '范冰冰0-1', age: '23', id: '3-1'},
      {name: '范冰冰0-2', age: '23', id: '3-2'},
      {name: '范冰冰0-3', age: '23', id: '3-3'},
    ]
  },
];
const Demo = () => {
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([])
  return (
    <div>
      <Table 
        rowKey="id"
        columns={columns}
        data={dataSource}
      />
    </div>
  )
};
export default Demo
```

### 表格列过宽导致 footer 滑动出表格底部

使用 scroll 属性给表格设置宽(x)或高(y)即可

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button } from 'uiw';

const columns = [
  {
    // title: '姓名',
    ellipsis: true, 
    width: 1000,
    title: ({ key }) => {
      return (
        <span>字段: {key}</span>
      )
    },
    key: 'name', 
  }, {
    title: '年龄',
    style: { color: 'red' },
    key: 'age',
  }, {
    title: '地址',
    key: 'info',
  }, {
    title: '操作',
    key: 'edit',
    width: 98,
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
  { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },
  { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },
  { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },
];
const Demo = () => (
  <div>
    <Table 
      scroll={{x: 1800, y: 100}}
      footer={<div style={{height: 20, }}>这个是footer</div>}
      columns={columns} data={dataSource} 
    />
  </div>
);
export default Demo
```

### 固定列 

通过使用 fixed 使其列固定
> ⚠️ 注意: 若并没有 scroll 滚动条，fixed 属性并不会有直观的效果
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button } from 'uiw';

const columns = [
  {
    title: '姓名',
    ellipsis: true, 
    // fixed: true,
    width: 50,
    key: 'name', 
  }, {
    // fixed: true,
    title: '年龄',
    width: 50,
    style: { color: 'red' },
    key: 'age',
  }, {
    title: '地址',
    width: 50,
    key: 'info',
  }, {
    title: '操作',
    key: 'edit',
    width: 98,
    fixed: 'right',
    render: (text, key, rowData, rowNumber, columnNumber) => (
      <div>
        <Button size="small" type="danger">删除</Button>
        <Button size="small" type="success">修改</Button>
      </div>
    ),
  },
];
const dataSource = [
  { name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。', edit: '' },
  { name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', edit: '' },
  { name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', edit: '' },
  { name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。', edit: '' },
  { name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', edit: '' },
  { name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', edit: '' },
  { name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', edit: '' },
];
const Demo = () => (
  <div>
    <Table scroll={{x: 1200}} bordered columns={columns} data={dataSource} />
  </div>
);
export default Demo
```

### 可编辑

利用 render 属性, 传递自定义组件实现

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button, Input, Select } from 'uiw';

const columns = (onChange) => [
  {
    title: '姓名',
    ellipsis: true, 
    key: 'name', 
    render: (text,key, rowData) => {
      return <EditInput 
        value={text} 
        onChange={(value)=>{
          onChange({...rowData, name: value}, rowData.id)
        }} 
      />
    }
  }, 
  {
    title: '性别',
    key: 'gender',
    render: (text,key, rowData) => {
      return <EditInput 
        value={text} 
        component="Select"
        onChange={(value)=>{
          onChange({...rowData, gender: value}, rowData.id)
        }} 
      />
    }
  },
  {
    title: '年龄',
    key: 'age',
    render: (text,key, rowData) => {
      return <EditInput 
        value={text} 
        type="number"
        onChange={(value)=>{
          onChange({...rowData, age: value}, rowData.id)
        }} 
      />
    }
  }, 
  {
    title: '地址',
    key: 'info',
    render: (text,key, rowData) => {
      return <EditInput 
        value={text} 
        onChange={(value)=>{
          onChange({...rowData, info: value}, rowData.id)
        }} 
      />
    }
  }, 
];
const dataSource = [
  { id: 1, gender: "男", name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女'},
  { id: 2, gender: "男", name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人', },
  { id: 3, gender: "男", name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手', },
  { id: 4, gender: "男", name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。'},
  { id: 5, gender: "男", name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。', },
  { id: 6, gender: "男", name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班', },
  { id: 7, gender: "男", name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。', },
];
const EditInput = ({edit, value, type, onChange, component, ...other}) => {
  const [isEdit, setIsEdit] = React.useState(edit);
  const inputRef = React.useRef();
  React.useEffect(()=>{
    isEdit && inputRef.current.focus()
  }, [isEdit])
  if(isEdit) {
    if(component === "Select") {
      return <Select 
        ref={inputRef}
        defaultValue={value} 
        onBlur={e=>{
          onChange(e.target.value)
          setIsEdit(false)
        }}
      >
        <Select.Option value="男">男</Select.Option>
        <Select.Option value="女">女</Select.Option>
      </Select>
    }
    return <Input 
      {...other}
      defaultValue={value} 
      ref={inputRef} 
      type={type || "text"}
      onBlur={(e)=>{
        onChange(e.target.value)
        setIsEdit(false)
      }}
    />
  }
  return <div onClick={()=>{
    setIsEdit(true)
  }}>{value}</div>
}
const Demo = () => {
  const [data, setData] = React.useState(dataSource)
  const onChange = (value, id) => {
    setData(data.map(it=>it.id === id ? value : it))
  }
  return <div>
    <Table columns={columns(onChange)} data={data} />
  </div>
};
export default Demo
```

### 可编辑行

利用 Form 组件和 render 属性, 实现编辑行效果

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Table, Button, Input, Select, Form, Notify } from 'uiw';

const columns = (actived, setChange, fields) => {
  return [
    {
      title: '姓名',
      ellipsis: true, 
      key: 'name', 
      render: (text,key, rowData) => {
        if(rowData.id === actived) return fields.name
        return text
      }
    }, 
    {
      title: '性别',
      key: 'gender',
      render: (text,key, rowData) => {
        if(rowData.id === actived) return fields.gender
        return text
      }
    },
    {
      title: '年龄',
      key: 'age',
      render: (text,key, rowData) => {
        if(rowData.id === actived) return fields.age
        return text
      }
    }, 
    {
      key: 'id',
      render: (id, key, rowData)=>{
        const flag = id === actived
        if(flag){
          return <>
            <Button type="primary" htmlType="submit">Save</Button>
            <Button type="danger" onClick={()=>setChange({})}>Cancel</Button>
          </>
        }
        return <Button 
          type="primary" 
          onClick={(e)=>{
            e.preventDefault();
            setChange(rowData)
          }} 
          disabled={actived !== undefined && !flag}
        >Edit</Button>
      }
    }
  ]
};
const dataSource = [
  { id: 1, gender: "男", name: '邓紫棋', age: '12', },
  { id: 2, gender: "男", name: '李易峰', age: '32', },
  { id: 3, gender: "男", name: '范冰冰', age: '23',  },
  { id: 4, gender: "男", name: '杨幂', age: '34',},
  { id: 5, gender: "男", name: 'Angelababy', age: '54', },
  { id: 6, gender: "男", name: '唐嫣', age: '12', },
  { id: 7, gender: "男", name: '吴亦凡', age: '4', },
];
const Demo = () => {
  const [data, setData] = React.useState(dataSource)
  const [itemRowData, setItemRowData] = React.useState({})
  const [id, setId] = React.useState()
  
  const form = React.useRef()
  const setChange = (rowData) => {
    setId(rowData.id)
    setItemRowData(rowData)
    form.current.setFields(rowData)
  }

  return <Form
    ref={form}
    onSubmit={({ current }) => {
      if(JSON.stringify(itemRowData) === JSON.stringify(current)) {
        Notify.error({
          title: '提交失败！',
          description: `表单提交内容并没有修改！`,
        });
        return 
      }
      setData(data.map(it=>it.id === current.id ? current : it))
      setId(undefined)
      Notify.success({
        title: '提交成功！',
        description: '数据已经更新'
      });
    }}
    fields={{
      name: {
        children: <Input placeholder="请输入姓名" />
      },
      age: {
        children: <Input placeholder="请输入年龄" type="number" />
      },
      gender: {
        children: <Select>
          <Select.Option value="男">男</Select.Option>
          <Select.Option value="女">女</Select.Option>
        </Select>
      }
    }}
  >
    {({ fields }) => <Table columns={columns(id, setChange, fields)} data={data} />}
  </Form>
};
export default Demo
```

## Props

### Table

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| columns | 表格列的配置描述，可以内嵌 `children`，以渲染分组表头。| ColumnProps[] | `[]` |
| data | 数据数组。| Array[] | `[]` |
| title | 表格标题 | ~~Function(text, key, rowData, rowNumber, columnNumber)~~ /<br/> Function(data: IColumns, rowNum: Number, colNum: Number)`@3.0.0+` /<br/> String / ReactNode | - |
| footer | 表格尾部 | String/ReactNode | - |
| bordered | 是否展示外边框和列边框 | Boolean | - |
| empty | 无数据状态 | ReactNode | - |
| onCellHead | 表头单元格点击回调 | ~~`Function(text, key, rowData, rowNumber, columnNumber)`~~ /<br/> Function(data: IColumns, colNum: Number, rowNum: Number, evn: React.MouseEvent<HTMLTableCellElement\>) `@3.0.0+` | - |
| onCell | 单元格点击回调 | ~~`Function(text, key, rowData, rowNumber, columnNumber)`~~ /<br/> Function(data: IColumns, options:{ colNum: Number, rowNum: Number, keyName: String }, evn: React.MouseEvent<HTMLTableCellElement\>) `@3.1.0+` | - |
| expandable | 可展开配置 | ExpandableType | - |
| rowKey | 表格行 key 的取值 | String | - |
| scroll | 表格是否可滚动，也可以指定滚动区域的宽、高 | { x?: React.CSSProperties['width'], y?: React.CSSProperties['height'] } | - |


### ColumnProps

列描述数据对象，是 columns 中的一项，

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|--------- |-------- |--------- |-------- |-------- |
| title | 列头显示文字。| ReactNode | - | - |
| key | 需要的 key，可以忽略这个属性，如果标题带有 `render` 函数，那么这个 `key` 为必须非常重要。| String | - | - |
| width | 列宽度。| Number | - | - |
| colSpan | 合并表头行。| Number | - | - |
| ellipsis | 超过宽度将自动省略。`v4.8.7+`| Boolean | `false` | - |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前值的 `key`，行索引数据，当前行号，当前列号。| `Function(text, key, rowData, rowNumber, columnNumber)` | - | - |
| align | 设置列的对齐方式 | "left"\|"center"\|"right" | - | - |
| className | 列样式类名 | String | - | - |
| fixed | 把选择框列固定	 | Boolean \|"left"\|"right" | - | 4.15.1 |

### expandable

> ⚠️ 注意: expandedRowKeys 与 onExpandedRowsChange 必须同时出现或不出现
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| expandedRowRender | 自定义展开行| (record, index, expanded) => React.ReactNode | - |
| expandIcon | 自定义图标 | (expanded, record, index) => React.ReactNode; | - |
| rowExpandable | 是否允许展开| (record)=>Boolean | - |
| defaultExpandAllRows | 初始时，是否展开所有行| Boolean | false |
| defaultExpandedRowKeys | 初始时，默认展开的行	rowKey数组 | Array | - |
| expandedRowKeys | 控制展开的行	rowKey数组 | Array | - |
| onExpandedRowsChange | 展开的行变化触发 | (expandedRows)=>void | - |
| onExpand | 点击展开图标触发 | (expanded,record,index)=>void | - |
| indentSize | 控制树形结构每一层的缩进宽度 | Number | 16 |
| childrenColumnName | 指定树形结构的列名 | String | children |
