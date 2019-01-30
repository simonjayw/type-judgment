const objectProto = Object.prototype

/**
 * 判断值是否类似prototype对象
 * 
 * @private
 * @param {*} value 
 * @returns {boolean}
 */
function isPrototype (value) {
    const Ctor = value && value.constructor
    const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto

    return value === proto
}

export default isPrototype
