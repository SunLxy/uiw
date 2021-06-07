(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[134],{1338:function(n,e,t){"use strict";t.r(e),e.default="Switch \u5f00\u5173\n===\n\n\u8868\u793a\u4e24\u79cd\u76f8\u4e92\u5bf9\u7acb\u7684\u72b6\u6001\u95f4\u7684\u5207\u6362\uff0c\u591a\u7528\u4e8e\u89e6\u53d1\u300c\u5f00/\u5173\u300d\u3002\u9009\u4e2d\u65f6\u7684\u5185\u5bb9\u652f\u6301\u54cd\u5e94\u5f0f\u3002\n\n```jsx\nimport { Switch } from 'uiw';\n// or\nimport Switch from '@uiw/react-switch';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Switch } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Switch checked style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} />\n    <Switch data-checked=\"\u5f00\" data-unchecked=\"\u5173\">\u7535\u6e90</Switch>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n\n### Form \u4e2d\u4f7f\u7528 Switch\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Form, Switch, Row, Col, Button, Notify } from 'uiw';\n\nconst Demo = () => (\n  <Form\n    onChange={({ initial, current }) => { }}\n    resetOnSubmit={false}\n    onSubmitError={(error) => error && error.filed ? { ...error.filed } : null}\n    onSubmit={({initial, current}) => {\n      console.log('switch::', initial, current)\n      const ErrObj = {};\n      if(Object.keys(ErrObj).length > 0) {\n        const err = new Error();\n        err.filed = ErrObj;\n        throw err;\n      }\n    }}\n    fields={{\n      switch: {\n        checked: true,\n        initialValue: true,\n        label: '\u8bf7\u8f93\u5165\u5185\u5bb9',\n        help: '\u5fc5\u9009\u9009\u9879\uff01',\n        validator: value => !value ? '\u5fc5\u586b\u9009\u9879\uff01' : null,\n        children: <Switch style={{ maxWidth: 200 }} />,\n      },\n    }}\n  >\n    {({ fields, state, canSubmit }) => {\n      return (\n        <div>\n          <Row>\n            <Col>{fields.switch}</Col>\n          </Row>\n          <Row>\n            <Col>\n              <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n            </Col>\n          </Row>\n          <Row>\n            <Col>\n              <pre style={{ padding: 10, marginTop: 10 }}>\n                {JSON.stringify(state.current, null, 2)}\n              </pre>\n            </Col>\n          </Row>\n        </div>\n      );\n    }}\n  </Form>\n);\n\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u8bbe\u7f6e\u6587\u5b57\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Switch } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Switch\n      data-checked=\"\u5f00\"\n      data-unchecked=\"\u5173\"\n      onChange={(e) => {\n        console.log('e', e.target.checked);\n      }}\n      style={{ marginRight: 10 }}\n    />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n\n### \u7981\u7528\u72b6\u6001\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Switch } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Switch disabled checked style={{ marginRight: 10 }} />\n    <Switch disabled style={{ marginRight: 10 }} />\n    <Switch disabled data-checked=\"\u5f00\" data-unchecked=\"\u5173\">\u7535\u6e90</Switch>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u5c3a\u5bf8\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Switch } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Switch size=\"large\" style={{ marginRight: 10 }} data-checked=\"\u5f00\" data-unchecked=\"\u5173\" />\n    <Switch size=\"large\" checked style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} />\n    <Switch style={{ marginRight: 10 }} data-checked=\"\u5f00\" data-unchecked=\"\u5173\" />\n    <Switch size=\"small\" data-checked=\"\u5f00\" data-unchecked=\"\u5173\">\u7535\u6e90</Switch>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u63a7\u5236\u7ec4\u4ef6\n\n\u901a\u8fc7 `checked` \u5c5e\u6027\u6539\u53d8 `Switch` \u7ec4\u4ef6\u72b6\u6001\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Switch, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      checked: true\n    }\n  }\n  onChange(e) {\n    console.log('~~~:::');\n    this.setState({ checked: e.target.checked });\n  }\n  render() {\n    return (\n      <div style={{ backgroundColor: '#fff', margin: -15, padding: 15, borderRadius: '5px 5px 0 0' }}>\n        <Switch onChange={this.onChange.bind(this)} checked={this.state.checked} style={{ marginRight: 10 }} />\n        <Button\n          size=\"small\"\n          type=\"primary\"\n          onClick={() => {\n            this.setState({ checked: !this.state.checked });\n          }}\n        >\n          \u70b9\u51fb\u6309\u94ae\u6539\u53d8 Switch \u72b6\u6001\n        </Button>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Switch \n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------ |-------- |---------- |-------- |\n| value | \u6839\u636e value \u8fdb\u884c\u6bd4\u8f83\uff0c\u5224\u65ad\u662f\u5426\u9009\u4e2d | String/Number/Boolean | - |\n| name | \u7528\u4e8e\u8868\u5355\u5bf9\u5e94\u7684\u540d\u79f0 | String | - |\n| checked | \u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d | boolean | false |\n| disabled | \u662f\u5426\u7981\u7528 | boolean | false |\n| onChange | \u53d8\u5316\u65f6\u56de\u8c03\u51fd\u6570 | Function(e:Event) | - |\n| data-checked |  \u9009\u4e2d\u65f6\u7684\u5185\u5bb9 | string/ReactNode | - |\n| data-unchecked |  \u975e\u9009\u4e2d\u65f6\u7684\u5185\u5bb9 | string/ReactNode | - |\n| size |  \u5f00\u5173\u5927\u5c0f\uff0c\u53ef\u9009\u503c\uff1a`large` `default` `small` | string | default |\n"}}]);
//# sourceMappingURL=134.293c9dad.chunk.js.map