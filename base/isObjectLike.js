/**
 * 判断值是否是一个类对象，不包含null
 * @param {*} value 
 * @returns {boolean}
 * @example
 * 
 * isObjectLike({})
 * // => true
 * 
 * isObjectLike([])
 * // => true
 * 
 * isObjectLike(Function)
 * // => false
 * 
 * isObjectLike(null)
 * // => false
 */
function isObjectLike (value) {
    return typeof value === 'object' && value !== null
}

export default isObjectLike
