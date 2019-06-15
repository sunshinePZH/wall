const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yqc900718!',
    database: 'wall',
});
connection.connect();

// 创建库 好像无法操作库
// let sql = `create databases wall`
// connection.query(sql).catch((e) => {
//     console.log('创建库失败', e)
// });

// 创建表
// user
sql = `
create table if not exists \`user\`
(
    \`id\` int auto_increment,
    \`username\` varchar(100) not null,
    \`password\` varchar(100) not null,
    \`createTime\` timestamp not null default CURRENT_TIMESTAMP,
    \`modifyTime\` timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
    primary key (\`id\`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;
connection.query(sql, (e)  => {
    e && console.log('创建user表失败', e)
});
