const Base = require('./base.js');
const validator = require('./validator.js')
/**
 * 注册功能
 * 参数：username password
 */
/**
 * 数据库字段：userid username password createTime modifyTime
 */
/**
 * 遗留问题
 * - 数据库不存在时 操作其报错情况 
 * - 字段不存在时 报错情况
 * - 数据库不存在时可否自动添加个
 * - createTime modifyTime 可否改为自动，给所有表都加上
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
            return typeof result === 'string' ? result : '用户已注册';
        }
        // 写入数据库
        return this._addToDB();
    }
    /**
     * 验证参数
     * 正确返回true，错误返回错误信息
     */
    _verifyPostData() {
        const username = this.username;
        return validator.checkEmail(username) ? true : '邮箱不合法'
    }
    /**
     * 检测用户名是否已注册
     * 返回值：
     * - true 已注册
     * - false 未注册
     * - str 错误信息
     */
    async _isRegistered() {
        let result = false;
        const res = await this.queryDB(`select * from user where username=${this.username}`).catch((error) => {
            result = error; 
        });
        if (res) {
            result = true;
        }
        return result;
    }

    async _addToDB() {
        let err;
        let res = await this.queryDB(`
            insert into user (username, password, createTime, modifyTime)
            values
            (${this.params.username}, ${this.params.password}, ${Date.now()}, ${Date.now()})
        `).catch((e) => {
            err = '注册失败';
        });
        return res || err;
    }
}

module.exports = Register;