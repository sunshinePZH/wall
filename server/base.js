const mysql = require('mysql');


class Base {
    constructor() {
        this.db = connentMysql();
    }
}

const connentMysql = () => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'yqc900718!',
        database: 'test',
    });
    connection.connect();
    return connection;
}

module.exports = Base;