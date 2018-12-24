const MAX_SAFE_INTEGER = 9007199254740991

/**
 * 判断值是否是的数组长度值
 * @param {*} value 
 * @returns {boolean}
 * 
 * value % 1 == 0
 * 判断这个值是否是整数
 */
function isLength (value) {
    return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}

export default isLength
