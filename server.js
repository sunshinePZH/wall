const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const util = require('./server/utils/util.js');
const createModuleInstance = require('./server/api.js');

// 处理接口
const execApi = async (api, params) => {
    const arr = api.split('/');
    const moduleName = arr[0];
    const fnName = arr[1] || moduleName;
    // 模块实例
    const oModule = createModuleInstance(moduleName);
    // 执行模块方法（被执行的方法可能是promise/async => 加上await）
    const result = await oModule[fnName](params);
    // console.log(util.formatSqlData(result))
    console.log('execApi', result)
    return result;
}

// 获取 解析参数 
const getParams = (request) => {
    return new Promise((resolve, reject) => {
        if (request.method === 'GET') {
            let query = url.parse(request.url).query;
            query = querystring.parse(query);
            resolve(query);
        } else {
            let query = '';
            request.on('data', (chunk) => {
                query += chunk;
            });
            request.on('end', () => {
                resolve(query);
            });
        }
    });
    
}

// 读取文件
const readFiles = (path) => {
    path = '.' + path;
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            err ? reject(err) : resolve(data.toString());
        });
    });
}

// 服务
http.createServer( async (request, response) => {
    let statuCode = 200;
    let data;
    console.log(`request:${request.url}`)
    const urlObject = url.parse(request.url);
    const pathname = urlObject.pathname;
    // 请求接口 "/api/module/fn"
    if (pathname.slice(0, 4) === '/api') {
        // 获取传递的参数
        const params = await getParams(request);
        let api = pathname.slice(5);
        data = await execApi(api, params);
        console.log(`返回值:`, data)
    // 请求静态文件
    } else {
        data = await readFiles(pathname).catch( error => {
            console.error(error);
            statuCode = 404;
            data = error;
        });
    }

    // 状态码设置   
    response.writeHead(statuCode, {'Content-Type': 'text/html'});
    // 响应data
    if (data) {
        data = Array.isArray(data) ? JSON.stringify(data) : data;
        response.write(data);
    }
    response.end();
}).listen(8080, '0.0.0.0');

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');
 
 
