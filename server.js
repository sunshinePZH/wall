const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const util = require('./server/utils/util.js');
const createModuleInstance = require('./server/api.js');

/**
 * 执行api对应对的方法，返回处理结果对象
 * @param {*} api 
 * @param {*} params 
 */
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

/**
 * 根据请求类型，解析接受的参数，并返回
 * @param {obj} request 请求对象
 */
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

/**
 * 读取指定路径下的文件，返回读取的字符串或读取失败信息
 * @param {*} path 
 */
const readFiles = (path) => {
    path = '.' + path;
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            err ? reject(err) : resolve(data.toString());
        });
    });
}

/**
 * 服务器入口，接受请求并返回结果
 */
http.createServer( async (request, response) => {
    console.log(`request:${request.url}`)

    let statuCode = 200;
    let data;

    const urlObject = url.parse(request.url);
    const pathname = urlObject.pathname;
    // 请求接口（ex: /api/module/fn）
    if (pathname.slice(0, 4) === '/api') {
        // 获取传递的参数
        const params = await getParams(request);
        let api = pathname.slice(5);
        const res = await execApi(api, params).catch( error => {
            statuCode = 404;
            data = error;
        });
        if (res) {
            data = res;
        }

        console.log(`返回值:`, data)
    // 请求静态文件
    } else {
        const res = await readFiles(pathname).catch( error => {
            console.error('error', error);

            statuCode = 404;
            data = error;
        });
        if (res) {
            data = res;
        }
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
 
 
