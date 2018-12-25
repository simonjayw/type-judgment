import freeGlobal from './freeGlobal'

/** 检测全局变量 exports */
const freeExports = typeof exports == 'object' && exports !== null && !exports.nodeType && exports

/** 检测全局变量 module */
const freeModule = freeExports && typeof module == 'object' && module !== null && !module.nodeType && module

/** 检测 CommonJs 的 module.exports */
const moduleExports = freeModule && freeModule.exports === freeExports

/** 检测node.js 全局变量 process */
const freeProcess = moduleExports && freeGlobal.process

/** Node.js helper */
const nodeTypes = ((() => {
    try {
        const typesHelper = freeModule && freeModule.require && freeModule.require('util').types

        return typesHelper
            ? typesHelper
            : freeProcess && freeProcess.binding && freeProcess.binding('util')
    } catch (e) {}
})())
