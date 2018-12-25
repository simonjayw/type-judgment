import getTag from './internal/getTag'
import isObjectLike from './base/isObjectLike'

/**
 * 判断是否是Argumets类型
 * @param {*} value 
 * @example
 * 
 * isArguments(function () { return arguments }())
 * // => true
 * 
 * isArguments([1, 2, 3])
 * // => false
 */
function isArguments (value) {
    return isObjectLike(value) && getTag(value) === '[object Arguments]'
}

export default isArguments
