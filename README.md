# wall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
## 需求

1. 主页 
2. 推荐
2. 新品（最近上新）
3. 分类（花色、适用场景、厂商、发布日期、是否推荐）
4. 简介
5. 注册
6. 登录（qq / 微信 / 找回密码（默认邮箱，否则按注册日期））
7. 个人中心（个人信息，邮箱绑定，收藏，浏览历史）
8. 管理员
- 显示：分类页
- 修改分类：可修改分类信息
- 新建分类
- 上传：选择分类后进入后上传
- 管理：删除图片，编辑图片信息


## 登录功能

> 快捷，登录主要为了用户方便收藏和查看浏览记录

1. 支持QQ/微信登录 【暂不支持】
2. 用户名&密码登录

## 注册功能设计

> 简洁，避免过多的填写内容导致用户放弃注册

#### 方案一

1. 用户名
要求为邮箱，用来找回密码

2. 密码
不用二次确认，用户忘记可以直接找回

#### 方案二 【暂不支持】

手机号验证登录
