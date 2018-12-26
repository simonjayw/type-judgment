import getTag from './internal/getTag'
import isObjectLike from './base/isObjectLike'

/**
 * 判断值为Function对象
 * 
 * @param {*} value 
 */
function isFunction (value) {
    if (!isObjectLike(value)) {
        return false
    }

    const tag = getTag(value)

    return tag == '[object Function]' || tag == '[object AsyncFunction]'
        || tag == '[object GeneratorFunction]' || tag == '[object Proxy]'
}

export default isFunction
