const Base = require('./base.js');
const validator = require('./validator.js')
/**
 * 注册功能
 * 参数：username password
 */
/**
 * 数据库字段：userid username password createTime modifyTime
 */
class Register extends Base {
    constructor() {
        super();
        this.params = '';
    }

    /**
     * 注册接口 /register
     * @param {object} params 要接受的参数
     */
    async register(params) {
        this.params = params;
        // 参数校验
        let result = this._verifyPostData();
        if (result !== true) {
            return result;
        }
        // 检查已注册
        result = await this._isRegistered();
        if (result) {
            return result;
        }
        // 写入数据库
        const [isOk, msg] = this._addToDB();
        return this.buildResData(msg, isOk);
    }
    /**
     * 验证参数
     * 正确返回true，错误返回错误信息
     */
    _verifyPostData() {
        const username = this.params.username;
        return validator.checkEmail(username) ? true : '邮箱不合法'
    }
    /**
     * 检测用户名是否已注册
     * 返回值：
     * - false 未注册
     * - str 错误信息/已注册
     */
    async _isRegistered() {
        let result = false;
        const res = await this.queryDB(`select * from user where username='${this.params.username}'`).catch((error) => {
            result = error; 
        });
        if (res && res.length) {
            result = '用户已注册';
        }
        return result;
    }

    async _addToDB() {
        let isOk = true;
        let msg = '注册成功';
        let sql = 'insert into user (username, password) values ("' + this.params.username + '","' + this.params.password +'")';
        await this.queryDB(sql).catch((e) => {
            isOk = false;
            msg = '注册失败';
        });
        return [isOk, msg];
    }
}

module.exports = Register;