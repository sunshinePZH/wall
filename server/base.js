const mysql = require('mysql');


class Base {
    constructor() {
        this.db = connentMysql();
    }
    /**
     * 查找数据库，只resolve（有错误返回'数据库查询错误'）
     * @param {str} sql 
     */
    queryDB(sql) {
        return new Promise((resolve, reject) => {
            this.db.query(sql, (error, res, fields) => {
                error && console.error(error) && reject('数据库查询错误');
                resolve(res);
            });
        });
    }
    buildResData(data, isError = false) {
        return JSON.stringify({
            error: isError,
            data
        });
    }
}

const connentMysql = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'yqc900718!',
        database: 'wall',
    });
    connection.connect();
    return connection;
}

module.exports = Base;