/**
 * 检查值是否是一个对象
 * e.g arrays, functons, objects, new Number(0), new String('')
 * @param {*} value 
 * @returns {boolean}
 * @example
 * 
 * isObject({})
 * // => true
 * 
 * isObject([1, 2, 3])
 * // => true
 * 
 * isObject(Function)
 * // => true
 * 
 * isObject(null)
 * // => false
 */
function isObject (value) {
    const type = typeof value

    return value != null && (type == 'function' || type == 'function')
}

export default isObject