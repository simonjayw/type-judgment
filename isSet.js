import getTag from './internal/getTag'
import isObjectLike from './base/isObjectLike'
import nodeTypes from './internal/nodeTypes'

const nodeIsSet = nodeTypes && nodeTypes.isSet

/**
 * 检查值是否是set类型
 * 
 * @param {*} value
 * @returns {boolean}
 */
const isSet = nodeIsSet
    ? (value) => nodeIsSet(value)
    : (value) => isObjectLike(value) && getTag(value) == '[object Set]'

export default isSet
