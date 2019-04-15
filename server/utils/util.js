formatSqlData = (data) => {
    return isObject(data) ? JSON.parse(JSON.stringify(data)) : '';
}
isObject  = (data) => {
    return Object.prototype.toString.call(data) === '[object Object]'
}

module.exports = {
    formatSqlData,
    isObject
};