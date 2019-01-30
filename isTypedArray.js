import getTag from './internal/getTag'
import nodeTypes from './internal/nodeTypes'
import isObjectLike from './base/isObjectLike'

/** 判断`toStringTag`之后的类型 */
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)\]$/

/** node的help引用 */
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray

const isTypedArray = nodeIsTypedArray
    ? (value) => nodeIsTypedArray(value)
    : (value) => isObjectLike(value) && reTypedTag.test(getTag(value))

export default isTypedArray