const toString = Object.prototype.toString

/**
 * 获取值的toString后的值
 * 
 * @private
 * @param {*} value 
 */
function getTag (value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]'
    }

    return toString.call(value)
}

export default getTag
