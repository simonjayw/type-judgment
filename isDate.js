import getTag from './internal/getTag'
import isObjectLike from './base/isObjectLike'
import nodeTypes from './internal/nodeTypes'

const nodeIsDate = nodeTypes && nodeTypes.isDate

/**
 * 检测是否是日期对象
 * @param {*} value
 * @returns {boolean}
 * @example
 * 
 * isDate(new Date())
 * // => true
 * 
 * isDate('Mon April 23 2012')
 * // => false
 */
const isDate = nodeIsDate
    ? (value) => nodeIsDate(value)
    : (value) => isObjectLike(value) && getTag(value) == '[object Date]'

export default isDate
