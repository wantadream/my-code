// 是否是外链

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 判断是否是数组
 * @param arg
 * @returns {arg is any[]|boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}
