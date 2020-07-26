// 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“abcdef”

function fn(str) {
    let flagA = false;
    let flagB = false;
    let flagC = false;
    let flagD = false;
    let flagE = false;
    let flagF = false;
    for (let item of str) {
      if (item === 'a') {
        flagA = true
      } else if (item === 'b' && flagA) {
        flagB = true
      } else if (item === 'c' && flagA && flagB) {
        flagC = true
      } else if (item === 'd' && flagA && flagB && flagC) {
        flagD = true
      } else if (item === 'e' && flagA && flagB && flagC && flagD) {
        flagE = true
      } else if (item === 'f' && flagA && flagB && flagC && flagD && flagE) {
        return true
      } else {
        flagA = false;
        flagB = false;
        flagC = false;
        flagD = false;
        flagE = false;
        flagF = false;
      }
    }
    return false
  }
  console.log(fn('qabcdefg'))