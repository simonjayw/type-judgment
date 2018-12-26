import isObjectLike from './base/isObjectLike'
import isPlainObject from './base/isPlainObject'

/**
 * 检查值是否是DOM节点
 * @param {*} value 
 * @returns {boolean}
 * @example
 * 
 * isElement(document.body)
 * // => true
 */
function isElement (value) {
    return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value)
}

export default isElement
