/**
 * 校验模块
 */

const $ ={};

/**
 * 邮箱校验
 */
$.checkEmail = (str) => {
    const regex = /\w+\@\w+\..*+/
    return regex.test(str);
}

const validator = $;
export default validator;