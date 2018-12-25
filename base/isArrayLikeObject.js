import isArrayLike from './isArrayLike'
import isObjectLike from './isObjectLike'

/**
 * 即类数组又类对象
 * @param {*} value 
 * @returns {boolean}
 * @example
 * 
 * isArrayLikeObject([1, 2, 3])
 * // => trye
 * 
 * isArrayLikeObject(document.body.children)
 * // => true
 * 
 * isArrayLikeObject('abc')
 * // => false
 * 
 * isArrayLikeObject(Function)
 * // => false
 */
function isArrayLikeObject (value) {
    return isObjectLike(value) && isArrayLike(value)
}

export default isArrayLikeObject
