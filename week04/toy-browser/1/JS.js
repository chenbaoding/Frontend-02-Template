// 在一个字符串中，找到字符”a”
function fn(str) {
    for(let item of str){
      if(item === 'a'){
        return true
      }
    }
    return false
  }
  var a = fn('i am zhenan')
  console.log(a)