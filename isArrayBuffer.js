import getTag from './internal/getTag'
import nodeTypes from './internal/nodeTypes'
import isObjectLike from './base/isObjectLike'

const nodeIsArrayBuffer = nodeTypes && nodeTypes.isArrayBuffer

const isArrayBuffer = nodeIsArrayBuffer
    ? (value) => nodeIsArrayBuffer(value)
    : (value) => isObjectLike(value) && getTag(value) === '[object ArrayBuffer]'

export default isArrayBuffer
