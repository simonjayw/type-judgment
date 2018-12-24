import getTag from './internal/getTag'
import isObjectLike from './base/isObjectLike'

/**
 * 判断值是否是布尔值或者布尔对象
 * @param {*} value 
 * @returns {boolean}
 */
function isBoolean (value) {
    return value === true || value === false ||
        (isObjectLike(value) && getTag(value) == '[object Boolean]')
}

export default isBoolean
