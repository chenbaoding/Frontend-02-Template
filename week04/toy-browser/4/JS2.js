//使用状态机完成”abababx”的处理。
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
      return foundA2;
    } else {
      return start(str);
    }
  }


  function foundA2(str) {
    if (str === 'a') {
      return foundB;
    } else {
      return start(str);
    }
  }

  function foundB(str) {
    if (str === 'b') {
      return foundA3;
    } else {
      return foundB(str);
    }
  }

  function foundA3(str) {
    if (str === 'a') {
      return foundB2;
    } else {
      return start(str);
    }
  }
  function foundB2(str) {
    if (str === 'b') {
      return foundA4;
    } else {
      return foundB(str);
    }
  }

  function foundA4(str) {
    if (str === 'x') {
      return end;
    } else {
      return foundA3(str);
    }
  }
  console.log(match('abababx'))