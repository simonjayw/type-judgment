import getTag from './internal/getTag'
import isObjectLike from './base/isObjectLike'

/**
 * 检查一个值是否是普通对象。
 * an object created by the `Object` constructor or one with a `[[Prototype]]` of `null`.
 * 
 * @param {*} value 
 * @returns {boolean}
 * @example
 * 
 * function Foo () {}
 * isPlainObject(new Foo)
 * // => false
 * 
 * isPlainObject([1, 2, 3])
 * // => false
 * 
 * isPlainObject({ x: 1, y: 3 })
 * // => true
 * 
 * isPlainObject(Object.create(null))
 * // => true
 */
function isPlainObject (value) {
    if (!isObjectLike(value) || getTag(value) != '[object Object]') {
        return false
    }
    if (Object.getPrototypeOf(value) === null) {
        return true
    }

    let proto = value
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
    }

    return Object.getPrototypeOf(value) === proto
}

export default isPlainObject
