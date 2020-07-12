# 8种数据类型

* Number
* String
* Boolean
* Undefined
* Null
* Symbol(专门用于定义object属性名，即key值)
* BigInt
* Object

## Number

1. 单精度与双精度的区别

首先，我们来说一下单精度浮点数与双精度浮点数的区别：

float： 即单精度浮点数，在内存中占32位
double float，即双精度浮点类型，在内存中占64位

例如: 在java中，我们可以手动指定一个数值是单精度还是双精度，也就是说指定一个数值是占32位还是64位，而在javascript中，就不需要我们手动指定了，js中明确规定了所有number类型的数据统一采用64位双精度浮点数，也就是说js中任何一个数值类型的数据在内存中都占64位。

2. 二进制科学技术法

我们只要类比于十进制科学技术法的写法理解即可，它只是二进制浮点数的一种写法。

```
例如：十进制数 let a = 123.4
用科学技术法表示就是：let a = 1.234 * 10^2

类比而言，二进制科学技术法也类似：

例如：二进制浮点数：let a = 100.101
用科学技术法表示就是：let a = 1.00101 * 2^2
```
公式如下：
![image](http://note.youdao.com/yws/res/2547/A7041EB2177E4A1E8B9898B6BD9F0DB1)

在内存中存储形式：
![image](http://note.youdao.com/yws/res/2578/E44B4C2173BB487DAF4728E76F546EA0)

以64位双精度浮点数为例：
* 符号位S：占一位，0代表正数，1代表负数，
* 指数位E：占11位，用来表示次方数，转换成十进制指数位的范围就是0～2047，但是，我们在实际用科学技术法表示的时候，指数位是可以为负值的，但是在内存中指数位如果要存负的二进制，又要引入符号位（此符号位不会第一点所说的符号位，这里指的是指数的正负情况），会很麻烦， 所以ieee 754标准引入了一个偏移量（双精度浮点数的指数偏移量是1023），然后用在内存中存储指数位的范围[0, 2047]，统一减去偏移量就得到[-1023, 1024],这就是我们在实际代码中书写时，指数位的范围，但是要记得当把这些值存储到计算机时，指数位要加上偏移量1023。
* 尾数位M：范围是1～2，占52位，例如：10进制数400.12，用10进制科学计数法表示为：4.0012*10^2,。其中"0012"就是尾数部分。


> 单精度浮点数也类似，偏移量是127。


3. 浮点数的数值范围和数值精度

根据标准，64位浮点数的指数部分的长度是11个二进制位，意味着指数部分的最大值是2047（2的11次方减1）。也就是说，64位浮点数的指数部分的值最大为2047，分出一半表示负数，则 JavaScript 能够表示的数值范围为21024到2-1023（开区间），超出这个范围的数无法表示。

如果指数部分等于或超过最大正值1024，JavaScript 会返回Infinity（关于Infinity的介绍参见下文），这称为“正向溢出”；如果等于或超过最小负值-1023（即非常接近0），JavaScript 会直接把这个数转为0，这称为“负向溢出”。

```
Number.MAX_VALUE //1.7976931348623157e+308
Number.MIN_VALUE //5e-324

Math.pow(2, 1024) === Infinity // true
Math.pow(2, 1025) === Infinity // true
```

> 典型问题：0.1 + 0.2 === 0.3 //false

原因主要是：首先我们将0.1和0.2转换成二进制以后，有效位是无限循环的，我们采用64位去存储0.1和0.2的话，因为有效位最多支持53个二进制位，所以只截取了一部分，此时已经有精度损失了，然后再转变成十进制，结果就变成了0.30000000000000004，并不是0.3.

![image](http://note.youdao.com/yws/res/2626/6F6F3767FB1E4E0AB81F13314790E4C2)

参考文档：https://www.cnblogs.com/lovelgx/articles/8581610.html



4. 常用语法

* 十进制写法：.左右两边如果是0的话，都可以省略
```
console.log(0 === 0.); //true
console.log(.2 === 0.2); //true
console.log(1e3 === 1000); //true
console.log(0..toString() === 0 .toString()); //true
0.toString() //这种写法会报错，因为0.是一个整体
```
* 二进制写法：以0b开头
```
let num = 0b10;
console.log(parseInt(num.toString(10))); //2 二进制转十进制

let num1 = 2;
console.log(parseInt(num.toString(2))); //10 十进制转二进制
```
* 八进制写法：以0o开头
```
let num = 0o10;
console.log(parseInt(num.toString(10))); //8  八进制转十进制
```
* 十六进制写法：以0x开头
```
let num = 0o10;
console.log(parseInt(num.toString(10))); //8  十六进制转十进制
```


参考文档：

* 原码，反码，补码：https://zhuanlan.zhihu.com/p/91967268

* 浮点数精度之谜：https://zhuanlan.zhihu.com/p/28162086

* 详解二进制浮点数：https://zhuanlan.zhihu.com/p/58731780

* js的数值精度和数值范围：https://blog.csdn.net/qizhiqq/article/details/78914523

## String

#### 1. 字符集发展历史

首先要说一下，为什么需要字符集？我们都知道所有的数据在计算机中都是以二进制的格式去存储，那么我们平时编程所有的这些字符，肯定是无法直接存储到计算机中的，很显然，需要将这些字符转换成计算机可以识别的数字，怎么转呢？其实就是做一层映射关系，然后规定字符对应的数字是什么，比如，我们要存储a字符，那么实际存入一个97（二进制是01100001）这个过程其实叫做编码encode, 那么，如果读取的时候，当遇到97，我们就让计算机显示字符a，这个过程是解码decode.


接下来，其实就是如何定义字符的映射关系（即字符集）呢？

首先，第一阶段就是ASCII，这也是美国人最先提出的一个字符集，但是它只规定了美国人常用的一些字符，只能表示256的个字符，

第二阶段：当ASCII 陆续传到其他国家，其他国家发现这些标准根本满足不了自己国家的字符，然后就自己发布属于自己的标准，例如中国的GB2312，GBK，台湾的BIG5，欧洲的ISO等等。

第三阶段：但是每个国家都有自己的一套，很显然也会有很多问题呀，于是就需要发布一套统一的标准，这就是unicode, 它包含了所有国家的字符。

> 参考文档：
    https://zhuanlan.zhihu.com/p/142646606
    http://www.mamicode.com/info-detail-1943788.html

#### 2. 核心三要素
* character 字符
* code point 码点
* encoding 编码方式

注意：unicode 与 utf的区别

* unicode是字符集：为每一个字符分配一个唯一id（学名码位/码点/code point）
* utf是编码方式：将「码点」转换为字节序列（二进制）的规则


unicode虽然统一了全世界字符的二进制编码，但没有规定如何存储啊。x86和amd体系结构的电脑小端序和大端序都分不清，别提计算机如何识别到底是unicode还是acsii了。如果Unicode统一规定，每个符号用三个或四个字节表示，那么每个英文字母前都必然有二到三个字节是0，文本文件的大小会因此大出二三倍，这对于存储来说是极大的浪费。这样导致一个后果：出现了Unicode的多种存储方式。

互联网的兴起，网页上要显示各种字符，必须统一。utf-8就是Unicode最重要的实现方式之一。另外还有utf-16、utf-32等。UTF-8不是固定字长编码的，而是一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度。这是种比较巧妙的设计，如果一个字节的第一位是0，则这个字节单独就是一个字符；如果第一位是1，则连续有多少个1，就表示当前字符占用多少个字节。


> 参考文档：
https://www.cnblogs.com/crazylqy/p/10183566.html

```
//将指定字符串转为二进制
unction encodeByUtf8 (str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i).toString(2));
    }
    return arr.join(' ');
}

console.log(encodeByUtf8('科比')); //111100111010001 110101111010100

// 本质上就是获取字符的unicode码，然后再转成二进制的过程。
```

#### 常用语法

* "abc"
* 'abc'
* \`abc`


## Boolean
布尔类型，比较简单，它的结果就是true/false, 注意这里的true或者false是关键字。

## undefined/null/void 0

* undefined: 它是一个全局变量，我们可以给undefiend赋值（不推荐）
* null：它是一个关键字，无法对其进行赋值，会报错
* void 0：void可以把任何值转变成undefined

例如：我们在控制台试一下就可以看到如下结果：

![image](http://note.youdao.com/yws/res/2378/D79858A753EF4F5981DF957D04433B08)


## Object

![image](http://note.youdao.com/yws/res/2387/F4E496C0AED74001B78EEEC2E8A16560)
![image](http://note.youdao.com/yws/res/2389/A4F5E34783EA41BEBA832FFF942685C9)


对象的三要素：
* identifier:即唯一标识，编程语言一般都采用内存地址来表示对象的唯一性
* state：即对象中的属性
* behavior：即对象中的方法

<b>注意：在设计对象的状态和行为的时候，一定要遵循“行为改变状态”的原则</b>


首先，来说一下对象中的属性特性：

* value
* writable
* enumerable
* configurable
* get/set


再来说一下object的常用API:

#### 1. 自定义属性特性
* defineProperty 
* defineProperties
* Object.getOwnPropertyNames() //获取对象自身属性列表（不包括原型对象）
* Object.getOwnPropertyDescriptor() // 获取指定对象属性的特性
    
```
let obj = {};
Object.defineProperty(obj, 'name', {
    value: 123
})
console.log(obj.name); //123
console.log(Object.getOwnPropertyNames(obj)); //['name']
console.log(Object.getOwnPropertyDescriptor(obj, 'name')) //{value: 123, writable: false, enumerable: false, configurable: false}
```
#### 2. 基于对象原型的API
* Object.create() //创建一个对象实例，并且指定它的原型对象
* Object.setPropertyOf() //设置指定的对象的原型对象
* object.getPropertyOf() //获取指定对象的原型对象

```
let obj = Object.create({
    a: 123
});

console.log(obj.a); //结果：123
console.log(Object.getPrototypeOf(obj)) //结果：{a: 123}

//当然，也可以采用如下的方式，创建对象，并且指定原型对象
let obj = {};
Object.setPrototypeOf(obj, {
    a: 123
})
console.log(obj.a);
console.log(Object.getPrototypeOf(obj)) //结果：{a: 123}

//在实际开发中，推荐使用Object.create来创建对象，并且指定原型对象
```
#### 3. 基于类的API： 

* new
* class
* extends

再来说一下特殊对象Function：

函数对象，相对于普通对象而言，多了一个行为[[call]]，正是因为它的存在，我们才可以通过fn()方式去调用函数对象，其实内部是调用了[[call]]


注意：所有用双方括号定义的属性，例如：[[call]],[[construct]]，我们都无法直接使用js代码去访问，但是宿主环境，例如v8引擎等是可以访问到的。

#### 4. 原型链

```
//注意：对象的原型对象是一个对象。
let obj = {name: 'kobe'};
console.log(obj.__proto__ === Object.prototype);//true
console.log(Object.prototype.__proto__); //null
console.log(obj.constructor === Object);//true
console.log(Object.constructor === Function);//true
console.log(Object.prototype.constructor === Object);//true

//注意：函数的原型对象是一个函数。
let fn = function () {};
console.log(fn.__proto__ === Function.prototype);//true
console.log(Function.prototype.__proto__ === Object.prototype); //true
console.log(fn.constructor === Function)//true
console.log(Function.constructor === Function);//true
console.log(Function.prototype.constructor === Function);//true

//Object,Function,Date 等都是内置的构造函数，所以他们的__proto__都是Function.prototype
console.log(Object.__proto__ === Function.prototype);//true
console.log(Function.__proto__ === Function.prototype); //true
console.log(Date.__proto__ === Function.prototype); //true

```
我们再来看看原型对象上具体有哪些内置的方法：
![image](http://note.youdao.com/yws/res/2511/5E0DEABB2D95498DA7BE24DFBADDE001)
```
//constructor: 指向创建当前实例的构造函数

//hasOwnProperty:判断当前实例是否包含某些属性，不包含原型对象上的
let obj = {name: 'kobe'};
console.log(obj.hasOwnProperty('name'));


//isPropertyOf： 判断对象1是否在对象2的原型链中
let obj = {name: 'kobe'};
let obj2 = Object.create(obj);
console.log(obj.isPrototypeOf(obj2)); //true

//propertyIsEnumerable： 判断对象中指定的属性是否可枚举，当然也可以使用for...in..来判断
let obj = {name: 'kobe'};
console.log(obj.propertyIsEnumerable('name'));//true


//toString和toLocaleString，
let a = 1234;
console.log(a.toString()); //1234
console.log(a.toLocaleString());//1,234

总结： 以上就是toString()和toLocaleString()两点区别：

1.当数字是四位数及以上时，有区别，
2.当目标是标准时间格式时，用以上两种方法是有区别的

具体可参考：https://www.cnblogs.com/lwwen/p/6400677.html


//valueOf: 一般数据的valueOf就是其本身
let obj = {name: 'kobe'};
console.log(obj.valueOf());
```

## 类型判断

1. typeof 

场景：主要用于判断基本数据类型，具体是哪种引用数据类型，无法判断，这时就可以使用instanceof

2. instanceof
场景：主要用于判断具体是哪种引用数据类型

> 拓展：instanceof的原理？

3. Ojbect.prototype.toString.call();

以上两种方式都有各自的缺陷，有没有办法可以同时判断是基础数据类型还是引用数据类型，同时还可以知道具体是哪种数据类型，答案就是Object.prototype.toString.call()
```
var o = new Object;
var n = new Number;
var s = new String;
var b = new Boolean;
var d = new Date;
var arg = function(){ return arguments }();
var r = new RegExp;
var f = new Function;
var arr = new Array;
var e = new Error;
console.log([o, n, s, b, d, arg, r, f, arr, e].map(v => Object.prototype.toString.call(v)));
```
结果为：

![image](http://note.youdao.com/yws/res/2451/ABAABD444444479780D41897B1EBC5A0)

# 对象分类

#### 1. 如何用普通自定义对象模拟函数和构造器？

首先，我们要了解函数对象和构造器对象与普通对象的不同之处，

事实上，JavaScript 为这一类对象预留了私有字段机制，并规定了抽象的函数对象与构造器对象的概念。

函数对象的定义是：具有[[call]]私有字段的对象，构造器对象的定义是：具有私有字段[[construct]]的对象。

因此，我们可以这样说，任何对象只需要实现[[call]]，它就是一个函数对象，可以去作为函数被调用。而如果它能实现[[construct]]，它就是一个构造器对象，可以作为构造器被调用。


#### 2. 分类

* 宿主对象：由javascript宿主环境提供的对象，例如浏览器环境提供的Document,Image等
* 内置对象
    * 原生对象：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。
    * 固有对象：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。
    * 自定义对象：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承。
    

下面是我们所有的原生对象：

![image](http://note.youdao.com/yws/res/2655/1690F4EF7AEB4DD4B9263064CB3A9430)
> 参考文档：https://www.cnblogs.com/zhaoyang007/p/12676381.html
