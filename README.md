# wxutil

[![Build Status](https://travis-ci.com/wuwangxu/wxutil.svg?branch=master)](https://travis-ci.com/wuwangxu/wxutil) [![codecov](https://codecov.io/gh/wuwangxu/wxutil/branch/master/graph/badge.svg)](https://codecov.io/gh/wuwangxu/wxutil)

前端工具库

## 安装

1. 直接使用`lib`目录下的`wxutil.min.js`

``` html
  <script src="wxutil.min.js"></script>
  <script>
      var params = wxutil.getParamByName('a')
  </script>
```

2. npm/yarn安装
``` bash
$ yarn add wxutil
```
使用方法：
支持tree shaking按需加载
 ``` javascript
 import {iOS,getParmaByName} from 'wxutil'
 const isIOS = iOS()
 ...
 或者
 import * as _ from 'wxutil'
 const isIOS = _.iOS()
 ...

```

## 文档
[device]
[reg]
[dom]
[url]

[device]:https://github.com/wuwangxu/wxutil/blob/master/docs/device.md
[dom]:https://github.com/wuwangxu/wxutil/blob/master/docs/dom.md
[reg]:https://github.com/wuwangxu/wxutil/blob/master/docs/reg.md
[url]:https://github.com/wuwangxu/wxutil/blob/master/docs/url.md


## 鸣谢

脚手架搬自 [z.js](https://github.com/zlxbuzz/z.js)
