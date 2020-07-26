### 工作流程
1. URL(HTTP)
经过一个http请求和解析http回应的一个过程
2. HTLM(parse)
3. DOM(css computing)
4. DOM with css(layout)
5. DOM with position(render) ===>Bitmap
### 状态机
有限状态机处理字符串
1. 每一个状态机都是一个机器
a. 在每一个机器里，我们可以做计算，存储，输出...
b. 所有的这些机器都接受的输入是一致的
c. 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数
2. 每一个机器知道下一个状态
a. 每一个机器都有确定的下一个状态（More）
b. 每一个机器根据输入的决定下一个状态（Mealy）
### JS中的有线状态机（Mealy）
每一个函数是一个状态
function state(input){ // 函数参数就是输入
// 在函数中，可以自由的编写代码，处理每个状态的逻辑
    return next; // 返回值作为下一个状态
}
// 以下是调用
```
while(input){
    state = state(input) // 把状态机的返回值作为下一个状态
}
```
### 使用代码加深对状态机的理解
1. 在一个字符串中，找到字符”a”
```
   function fn(str) {
      for(let item of str){
        if(item === 'a'){
          return true
        }
      }
      return false
    }
    var a = fn('i am husanfeng')
    console.log(a)
```
2. 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“ab”
```
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
```
3. 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“abcdef”
```
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
```
4. 用状态机实现：字符串“abcabx”的解析
```
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
```
5. 使用状态机完成”abababx”的处理。
```
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
```




周末下班，下周补上任意字符串输出的方法