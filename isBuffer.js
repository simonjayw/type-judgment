import root from './internal/root'

/** 检查变量`exports` */
const freeExports = typeof exports == 'object' && exports !== null && !exports.nodeType && exports

/** 检查变量`module` */
const freeModule = freeExports && typeof module == 'object' && module !== null && !module.nodeType && module

/** 检查commonjs的扩展`module.exports` */
const moduleExports = freeModule && freeModule.exports === freeExports

/** 内置值引用 */
const Buffer = moduleExports ? root.Buffer : undefined

/** 内置方法引用 */
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined

/**
 * 检查值是不是buffer
 * 
 * @param {*} value
 * @returns {Boolean}
 * @example
 * 
 * isBuffer(new Buffer(2))
 * // => true
 * 
 * isBuffer(new Uint8Array(2))
 * // => false
 */
const isBuffer = nativeIsBuffer || (() => false)

export default isBuffer