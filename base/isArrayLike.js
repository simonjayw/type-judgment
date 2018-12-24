import isLength from './isLength'

/**
 * 判断是否是一个类数组
 * 不是一个function，有length属性。长度是0 - Numer.MAX_SAFE_INTERGER
 * @param {*} value 
 * @returns {boolean}
 * @example
 * 
 * isArrayLike([1, 2, 3])
 * // => true
 * 
 * isArrayLike(document.body.children)
 * // => true
 * 
 * isArrayLike('abc')
 * // => true
 * 
 * isArrayLike(Function)
 * // => false
 */
function isArrayLike (value) {
    return value != null && typeof value != 'function' && isLength(value.length)
}

export default isArrayLike
