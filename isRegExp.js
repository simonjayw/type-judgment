import getTag from './internal/getTag'
import isObjectLike from './base/isObjectLike'
import nodeTypes from './internal/nodeTypes'

const nodeIsRegexp = nodeTypes && nodeTypes.isRegExp

/**
 * 检查值是否是正则表达式
 * 
 * @param {*} value
 * @returns {boolean}
 */
const isRegExp = nodeIsRegexp
    ? (value) => nodeIsRegexp(value)
    : (value) => isObjectLike(value) && getTag(value) == '[object RegExp]'

export default isRegExp
