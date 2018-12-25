/** 检测Node.js 环境的全局变量Global */
const freeGlobal = typeof global === 'object' && global !== null && global.object === Object && global

export default freeGlobal
