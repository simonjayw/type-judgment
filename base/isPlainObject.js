import getTag from '../internal/getTag'
import isObjectLike from './isObjectLike'

/**
 * 判断一个值是否是普通对象。
 * 查找对象原型，（访问`[[Prototype]]`属性）最上面的原型应该是null
 * @param {*} value 
 * @return {boolean}
 * @example
 * 
 * function Foo () {
 *  this.a = 1
 * }
 * isPlainObject(new Foo)
 * // => false
 * 
 * isPlainObject([1, 2, 3])
 * // => false
 * 
 * isPlainObject({ x: '1', y: '2' })
 * // => true
 * 
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
