import getTag from './internal/getTag'
import isObjectLike from './base/isObjectLike'
import nodeTypes from './internal/nodeTypes'

const nodeIsMap = nodeTypes && nodeTypes.isMap

/**
 * 检查值是否是map类型
 * @param {*} value
 * @returns {boolean}
 * @examples
 * 
 * isMap(new Map)
 * // => true
 * 
 * isMap(new WeakMap)
 */
const isMap = nodeIsMap
    ? (value) => nodeIsMap(value)
    : (value) => isObjectLike(value) && getTag(value) === '[object Map]'

export default isMap

