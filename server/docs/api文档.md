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

返回值已上述为准

## 接口

1. 注册 /api/register/register

参数：

- username [string] 邮箱，必需符合邮箱规则
- password [string] 密码，6-24位

返回值：略