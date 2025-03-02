Grid 栅格
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-grid/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-grid.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-grid)
[![npm version](https://img.shields.io/npm/v/@uiw/react-grid.svg?label=@uiw/react-grid)](https://npmjs.com/@uiw/react-grid)

基于 `flex` 栅格系统。

```jsx
import { Row, Col } from 'uiw';
// or
import { Row, Col } from '@uiw/react-grid';
```

### 基础用法

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Row, Col } from 'uiw';

const Box = ({ num, height, width, style, background }) => <div style={{ ...style, textAlign: 'center', paddingTop: 5, paddingBottom: 5, background, width, height}}>Col {num}</div>

export default function Demo() {
  return (
    <Row>
      <Col fixed style={{ width: 150 }}> <Box num="1" background="#A5A5A5" /> </Col>
      <Col grow={2}> <Box num="2" background="#dedede" /> </Col>
      <Col grow={1}> <Box num="3" background="#A5A5A5" /> </Col>
    </Row>
  );
}
```

### Gutter

栅格间隔，可以写成像素值

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Row, Col } from 'uiw';

const Blank = ({ num, height, width, style, background }) => <div style={{ ...style, textAlign: 'center', paddingTop: 5,paddingBottom: 5, background, width, height}}>Col {num}</div>

export default function Demo() {
  return (
    <div>
      <Row gutter={10}>
        <Col> <Blank background="#A5A5A5" num={1}/> </Col>
        <Col> <Blank background="#dedede" num={2}/> </Col>
        <Col> <Blank background="#A5A5A5" num={3}/> </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col> <Blank background="#A5A5A5" num={1}/> </Col>
        <Col> <Blank background="#dedede" num={2}/> </Col>
        <Col> <Blank background="#A5A5A5" num={3}/> </Col>
      </Row>
    </div>
  );
}
```

### Flex 行设置列对齐

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Row, Col } from 'uiw';

const colStyl = { backgroundColor: 'rgba(230, 230, 230, 0.67)', marginBottom: 10 }
const Blank = ({ num, height, style, background = '#2EA3F4' }) => <div style={{ ...style, textAlign: 'center', color: '#fff', paddingTop: 5, paddingBottom: 5, background, height}}>Col {num}</div>

export default function Demo() {
  return (
    <div>
      <Row gutter={10} justify="center" align="top" style={colStyl}>
        <Col span="2"> <Blank height={35} num={1}/> </Col>
        <Col span="2"> <Blank height={50} num={2}/> </Col>
        <Col span="2"> <Blank height={70} num={3}/> </Col>
      </Row>
      <Row gutter={10} justify="space-around" align="middle"  style={colStyl}>
        <Col span="2"> <Blank height={35} num={1}/> </Col>
        <Col span="2"> <Blank height={50} num={2}/> </Col>
        <Col span="2"> <Blank height={70} num={3}/> </Col>
      </Row>
      <Row gutter={10} justify="space-between" align="bottom" style={colStyl}>
        <Col span="2"> <Blank height={35} num={1}/> </Col>
        <Col span="2"> <Blank height={50} num={2}/> </Col>
        <Col span="2"> <Blank height={70} num={3}/> </Col>
      </Row>
      <Row gutter={10} justify="flex-end" align="bottom" style={colStyl}>
        <Col span="2"> <Blank height={35} num={1}/> </Col>
        <Col span="2"> <Blank height={50} num={2}/> </Col>
        <Col span="2"> <Blank height={70} num={3}/> </Col>
      </Row>
      <Row gutter={10} justify="center" align="baseline"  style={{ ...colStyl, marginBottom: 0 }}>
        <Col span="2"> <Blank height={85} style={{ lineHeight: '85px' }} num={1}/> </Col>
        <Col span="2"> <Blank height={50} num={2}/> </Col>
        <Col span="2"> <Blank height={70} num={3}/> </Col>
      </Row>
    </div>
  );
}
```

### Flex 列对齐

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Row, Col } from 'uiw';

const Blank = ({ num, style, background = '#2EA3F4' }) => <div style={{ ...style, textAlign: 'center', color: '#fff', paddingTop: 5, paddingBottom: 5, background }}>Col {num}</div>

export default function Demo() {
  return (
    <div>
      <Row gutter={10} style={{height: 130}}>
        <Col align="top"> <Blank num={1}/> </Col>
        <Col align="middle"> <Blank num={2}/> </Col>
        <Col align="bottom"> <Blank num={3}/> </Col>
      </Row>
    </div>
  );
}
```

### 对齐内容

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Row, Col } from 'uiw';

const rowStyl = { backgroundColor: 'rgba(230, 230, 230, 0.67)', marginBottom: 10 }
const Blank = ({ num, height, width, style, background = '#2EA3F4' }) => <div style={{ ...style, textAlign: 'center', color: '#fff', paddingTop: 5, paddingBottom: 5, background, width, height}}>Col {num}</div>

export default function Demo() {
  return (
    <div>
      <Row gutter={10} justify="flex-start" style={rowStyl}>
        <Col span="2"> <Blank num={1}/> </Col>
        <Col span="2"> <Blank num={2}/> </Col>
      </Row>
      <Row gutter={10} justify="center" style={rowStyl}>
        <Col span="2"> <Blank num={1}/> </Col>
        <Col span="2"> <Blank num={2}/> </Col>
      </Row>
      <Row gutter={10} justify="flex-end" style={rowStyl}>
        <Col span="2"> <Blank num={1}/> </Col>
        <Col span="2"> <Blank num={2}/> </Col>
      </Row>
      <Row gutter={10} justify="space-between" style={rowStyl}>
        <Col span="2"> <Blank num={1}/> </Col>
        <Col span="2"> <Blank num={2}/> </Col>
      </Row>
      <Row gutter={10} justify="space-around" style={rowStyl}>
        <Col span="2"> <Blank num={1}/> </Col>
        <Col span="2"> <Blank num={2}/> </Col>
      </Row>
      <Row gutter={10} justify="space-evenly" style={{...rowStyl, marginBottom: 0 }}>
        <Col span="2"> <Blank num={1}/> </Col>
        <Col span="2"> <Blank num={2}/> </Col>
      </Row>
    </div>
  );
}
```

### 24栅格

可以通过指定 `24` 列中每列的宽度来创建基本网格系统。

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Row, Col } from 'uiw';

const Blank = ({ num, height, width, style, background = '#2EA3F4' }) => <div style={{ ...style, textAlign: 'center', color: '#fff', paddingTop: 5, paddingBottom: 5, background, width, height}}>Col {num}</div>

export default function Demo() {
  return (
    <div>
      <Row gutter={10} style={{ marginBottom: 10 }}>
        <Col span="2"> <Blank num={1}/> </Col>
        <Col span="2"> <Blank num={2}/> </Col>
        <Col span="2"> <Blank num={3}/> </Col>
        <Col span="2"> <Blank num={4}/> </Col>
        <Col span="2"> <Blank num={5}/> </Col>
        <Col span="2"> <Blank num={6}/> </Col>
        <Col span="2"> <Blank num={7}/> </Col>
        <Col span="2"> <Blank num={8}/> </Col>
        <Col span="2"> <Blank num={9}/> </Col>
        <Col span="2"> <Blank num={10}/> </Col>
        <Col span="2"> <Blank num={11}/> </Col>
        <Col span="2"> <Blank num={12}/> </Col>
      </Row>
      <Row gutter={10} style={{ marginBottom: 10 }}>
        <Col span="16"> <Blank num={1}/> </Col>
        <Col span="8"> <Blank num={2}/> </Col>
      </Row>
      <Row gutter={10} style={{ marginBottom: 10 }}>
        <Col span="8"> <Blank num={1}/> </Col>
        <Col span="8"> <Blank num={2}/> </Col>
        <Col span="8"> <Blank num={3}/> </Col>
      </Row>
      <Row gutter={10}>
        <Col span="12"> <Blank num={1}/> </Col>
        <Col span="12"> <Blank num={2}/> </Col>
      </Row>
    </div>
  );
}
```

### 动态列增长

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Row, Col } from 'uiw';

const Blank = ({ num, style, background = '#2EA3F4' }) => <div style={{ ...style, textAlign: 'center', color: '#fff', paddingTop: 5, paddingBottom: 5, background }}>Col {num}</div>

export default function Demo() {
  return (
    <div>
      <Row gutter={10} style={{ marginBottom: 10 }}>
        <Col> <Blank num={1}/> </Col>
        <Col grow={2}> <Blank num={2}/> </Col>
      </Row>
      <Row gutter={10}>
        <Col> <Blank num={1}/> </Col>
        <Col grow={2}> <Blank num={2}/> </Col>
        <Col grow={5}> <Blank num={3}/> </Col>
      </Row>
    </div>
  );
}
```

## Row

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| gutter | 栅格间隔间距 | number | - |
| justify | flex 布局下的水平排列方式 | Enum{`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`} | - |
| align | flex 布局下的垂直对齐方式 | Enum{`top`, `middle`, `bottom`, `baseline`} | - |


## Col

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| fixed | 如果为 `true`，则列宽固定为其内容的宽度 | boolean | - |
| grow | 列的宽度相对于同一网格中其他列的比率 | number | - |
| align | 网格中列的对齐方式 | Enum{`top`, `middle`, `bottom`, `baseline`} | - |
