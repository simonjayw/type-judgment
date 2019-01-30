import freeGlobal from './freeGlobal'

/** 检查变量self */
const freeSelf = typeof self == 'object' && self !== null && self.Object === Object && self

/** 用作对全局对象的引用 */
const root = freeGlobal || freeSelf || Function('return this')()

export default root
