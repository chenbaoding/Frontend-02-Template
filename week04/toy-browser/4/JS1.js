// 用状态机实现：字符串“abcabx”的解析
function match(string) {
    let state = start;
    for (let str of string) {
      state = state(str)
    }
    return state === end
  }
  function start(str) {
    if (str === 'a') {
      return foundA;
    } else {
      return start;
    }
  }
  function end(str) {
    return end;
  }
  function foundA(str) {
    if (str === 'b') {
      return foundB;
    } else {
      return start(str);
    }
  }
  function foundB(str) {
    if (str === 'c') {
      return foundC;
    } else {
      return start(str);
    }
  }
  function foundC(str) {
    if (str === 'a') {
      return foundA2;
    } else {
      return start(str);
    }
  }

  function foundA2(str) {
    if (str === 'b') {
      return foundB2;
    } else {
      return start(str);
    }
  }

  function foundB2(str) {
    if (str === 'x') {
      return end;
    } else {
      return foundB(str);
    }
  }
  console.log(match('abcabcabx'))