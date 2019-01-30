import getTag from './internal/getTag'
import isArguments from './isArguments'
import isArrayLike from './base/isArrayLike'
import isBuffer from './isBuffer'
import isPrototype from './internal/isPrototype'
import isTypedArray from './isTypedArray'

const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 检查值是否是一个空的对象、数组、map、set
 * 
 * 如果对象没有可以枚举的属性、
 * 类似数组的值的长度为0、
 * map、set的size为0
 * 都被认为是空的
 * 
 * @param {*} value 
 * @returns {boolean}
 * @example
 * 
 * isEmpty(null)
 * // => true
 * 
 * isEmpty(true)
 * // => true
 * 
 * isEmpty(1)
 * // => true
 * 
 * isEmpty([1, 2, 3])
 * // => false
 * 
 * isEmpty('abc')
 * // => false
 * 
 * isEmpty({ 'a': 1 })
 * // => false
 */
function isEmpty (value) {
    if (value === null) {
        return true
    }
    if (isArrayLike(value) &&
        (Array.isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length
    }

    const tag = getTag(value)
    if (tag == '[object Map]' || tag == '[object Set]') {
        return !value.size
    }
    if (isPrototype(value)) {
        return !Object.keys(value).length
    }
    for (const key in value) {
        if (hasOwnProperty.call(value, key)) {
            return false
        }
    }
    return true
}

export default isEmpty
