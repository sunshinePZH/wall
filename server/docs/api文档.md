> 先写文档，后开发


## 接口设计

#### api格式

**`/api/moduleName/fnName`**

以`/api`开头的视为请求接口（否则视为请求静态文件）

`moduleName`为模块类名，`fnName`为模块类的方法名

#### 返回值
---


1. 服务器错误，返回error

2. 其他返回success, 信息返回格式（只能是JSON字符串格式）

```js
{
    error: 0 | 1, // 1表示正确， 0表示错误
    data: str // 错误信息或正确信息
}
```

#### 接口类

#### 已完成接口

1. register/register 注册

参数：username password
返回值data：'注册成功'|'注册失败'