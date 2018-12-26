import getTag from './internal/getTag'
import isObjectLike from './base/isObjectLike'

/**
 * 检车值为数值
 * @param {*} value 
 * @returns {boolean}
 * @example
 * 
 * isNumber(3)
 * // => true
 * 
 * isNumber(Number.MIN_VALUE)
 * // => true
 * 
 * isNumber(Infinity)
 * // => true
 * 
 * isNumber(NaN)
 * // => true
 * 
 * isNumber('3')
 * // => false
 */
function isNumber (value) {
    return typeof value == 'number' ||
        (isObjectLike(value) && getTag(value) == '[object Number]')
}

export default isNumber
