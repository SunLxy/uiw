(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[123],{1330:function(n,e,i){"use strict";i.r(e),e.default="Pagination \u5206\u9875\n===\n\n\u5f53\u6570\u636e\u91cf\u8f83\u591a\u65f6\uff0c\u4f7f\u7528\u5206\u9875\u53ef\u4ee5\u5feb\u901f\u8fdb\u884c\u6570\u636e\u5207\u6362\uff0c\u6bcf\u6b21\u53ea\u52a0\u8f7d\u4e00\u4e2a\u9875\u9762\u3002\n\n```jsx\nimport { Pagination } from 'uiw';\n// or\nimport Pagination from '@uiw/react-pagination';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Pagination, Divider } from 'uiw';\n\nReactDOM.render(\n  <div>\n    <Pagination current={2} pageSize={10} total={30} divider />\n    <Divider />\n    <Pagination current={2} pageSize={10} total={38} divider />\n    <Divider />\n    <Pagination current={1} pageSize={5} total={249} />\n    <Divider />\n    <Pagination current={1} pageSize={10} total={50} />\n    <Divider />\n    <Pagination current={1} pageSize={10} total={60} divider />\n    <Divider />\n    <Pagination current={1} pageSize={10} total={70} divider />\n  </div>,\n  _mount_\n);\n```\n\n### \u8ff7\u4f60\u5206\u9875\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Pagination, Divider } from 'uiw';\n\nReactDOM.render(\n  <div>\n    <Pagination size=\"small\" current={1} pageSize={5} total={249} />\n    <Divider />\n    <Pagination size=\"small\" current={1} pageSize={10} total={50} />\n  </div>,\n  _mount_\n);\n```\n\n### \u5bf9\u9f50\n\n\u76ee\u524d\u6709\u4e09\u79cd\u5bf9\u9f50\u65b9\u5f0f `\u5de6\u8fb9(left)`\u3001`\u4e2d\u95f4(center)`\u3001`\u53f3\u8fb9(right)`\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Pagination, Divider } from 'uiw';\n\nReactDOM.render(\n  <div>\n    <Pagination\n      current={5}\n      total={250}\n      onChange={(pageNumber) => { \n        console.log(`pageNumber:${pageNumber}`)\n      }}\n    />\n    <Divider />\n    <Pagination\n      current={1}\n      alignment=\"center\"\n      total={250}\n      onChange={(pageNumber) => { \n        console.log(`pageNumber:${pageNumber}`)\n      }}\n    />\n    <Divider />\n    <Pagination\n      current={25}\n      alignment=\"right\"\n      total={250}\n      onChange={(pageNumber) => { \n        console.log(`pageNumber:${pageNumber}`)\n      }}\n    />\n  </div>,\n  _mount_\n);\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------ |-------- |---------- |-------- |\n| current | \u5f53\u524d\u9875\u6570\uff0c\u9009\u4e2d\u7684\u9875\u6570 | Number | 1 |\n| total | \u6570\u636e\u603b\u6570 | Number | 0 |\n| pageSize | \u6bcf\u9875\u6761\u6570 | Number | 10 |\n| divider | \u9875\u7801\u4e4b\u95f4\u662f\u5426\u95f4\u9694 | Boolean | - |\n| size | \u5f53\u4e3a `small` \u65f6\uff0c\u662f\u5c0f\u5c3a\u5bf8\u5206\u9875 | Enum{`small`, `default`} | - |\n| alignment | \u5bf9\u9f50 | Enum{`left`, `center`, `right`} | `left` |\n| onChange | \u9875\u7801\u6539\u53d8\u7684\u56de\u8c03\uff0c\u8fd4\u56de\u6539\u53d8\u540e\u7684\u9875\u7801 | Function(current, total, pageSize) | - |"}}]);
//# sourceMappingURL=123.c0403ac9.chunk.js.map