/**
 * 接口规范：
 * moduleName/fnName
 * fnName不写时认为与moduleName同名
 */
const basePath = './';
// 登录模块
const Login = require(basePath + 'login.js');
// 注册模块
const Register = require(basePath + 'register.js');

const createModuleInstance = (moduleName, params) => {
    switch (moduleName) {
        // 登录
        case 'login':
            return new Login(params);
        case 'register':
            return new Register(params);
    }
}
module.exports = createModuleInstance;