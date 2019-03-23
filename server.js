const http = require('http');
const fs = require('fs');
const url = require('url');

const apiMap = require('server/api.js')

// 处理接口
const execApi = (api) => {
    const path = apiMap[api];
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
    const urlObject = url.parse(request.url);
    const pathname = urlObject.pathname;
    // 请求接口
    if (pathname.slice(1, 4) === 'api') {
        const api = pathname.slice(4);
        data = await execApi(api).catch( err => {
            statuCode = 110;
        });
    // 请求静态文件
    } else {
        data = await readFiles(pathname).catch( err => {
            console.error(err);
            statuCode = 404;
        });
    }

    // 状态码设置   
    response.writeHead(statuCode, {'Content-Type': 'text/html'});
    // 响应data
    if (data) {
        response.write(data);
    }
    response.end();
}).listen(8080, '0.0.0.0');

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');
 
 
