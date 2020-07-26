function match(string,index) {
    let c = index ? index : 0;
    for (let i = c; i < string.length; i ++) {
        if (string[i] === 'a' && string[i+1] === 'b' && string[i+2] === 'a' && string[i+3] === 'b' && string[i+4] === 'a' && string[i+5] === 'b' && string[i+6] === 'x') {
            return console.log ('true');
        } else {
            if (string[i] !== 'a') {
                return match('abababx',i)
            } else if (string[i+1] !== 'b') {
                return match('abababx',i+1)
            } else if (string[i+2] !== 'a') {
                return match('abababx',i+2)
            }else if (string[i+3] !== 'b') {
                return match('abababx',i+3)
            }else if (string[i+4] !== 'a') {
                return match('abababx',i+4)
            }else if (string[i+5] !== 'b') {
                return match('abababx',i+5)
            }else if (string[i+6] !== 'x') {
                return match('abababx',i+6)
            }
        }
    }
}
console.log(    match('abababx'))