const Base = require('./base.js');

class Login extends Base{
    constructor(){
        super();
    }

    async login() {
        const data = await this._queryLoginData().catch((err) => {
            console.error('login', err);
        });
        return data;
    }
    _queryLoginData() {
        const sql = 'SELECT * FROM students';
        return this.queryDB(sql);
    }
}

module.exports = Login;