// 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“ab”

function fn(str) {
    let flag = false;
    for (let item of str) {
      if (item === 'a') {
        flag = true
      } else if (item === 'b' && flag) {
         return true
      } else {
        flag = false
      }
    }
    return false
  }