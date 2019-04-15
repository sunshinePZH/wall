const Base = require('./base.js');

class Login extends Base{
    constructor(){
        super();
    }

    async login() {
        const data = await this.queryLoginData().catch((err) => {
            console.error('login', err);
        });
        return data;
    }
    queryLoginData() {
        const sql = 'SELECT * FROM students';
        return new Promise((resolve, reject) => {
            this.db.query(sql, (error, res, fields) => {
                error && console.error(error);
                resolve(error ? '数据库查询错误' : res);
            });
        });
    }
    loginOut() {
        
    }
}

module.exports = Login;