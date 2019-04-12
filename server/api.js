// api map
const basePath = './';
const Login = require(basePath + 'login.js');

const createModuleInstance = (api, params) => {
    switch (api) {
        // 登录
        case 'login':
            return new Login(params);
    }
}
module.exports = createModuleInstance;