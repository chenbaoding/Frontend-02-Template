# 8����������

* Number
* String
* Boolean
* Undefined
* Null
* Symbol(ר�����ڶ���object����������keyֵ)
* BigInt
* Object

## Number

1. ��������˫���ȵ�����

���ȣ�������˵һ�µ����ȸ�������˫���ȸ�����������

float�� �������ȸ����������ڴ���ռ32λ
double float����˫���ȸ������ͣ����ڴ���ռ64λ

����: ��java�У����ǿ����ֶ�ָ��һ����ֵ�ǵ����Ȼ���˫���ȣ�Ҳ����˵ָ��һ����ֵ��ռ32λ����64λ������javascript�У��Ͳ���Ҫ�����ֶ�ָ���ˣ�js����ȷ�涨������number���͵�����ͳһ����64λ˫���ȸ�������Ҳ����˵js���κ�һ����ֵ���͵��������ڴ��ж�ռ64λ��

2. �����ƿ�ѧ������

����ֻҪ�����ʮ���ƿ�ѧ��������д����⼴�ɣ���ֻ�Ƕ����Ƹ�������һ��д����

```
���磺ʮ������ let a = 123.4
�ÿ�ѧ��������ʾ���ǣ�let a = 1.234 * 10^2

��ȶ��ԣ������ƿ�ѧ������Ҳ���ƣ�

���磺�����Ƹ�������let a = 100.101
�ÿ�ѧ��������ʾ���ǣ�let a = 1.00101 * 2^2
```
��ʽ���£�
![image](http://note.youdao.com/yws/res/2547/A7041EB2177E4A1E8B9898B6BD9F0DB1)

���ڴ��д洢��ʽ��
![image](http://note.youdao.com/yws/res/2578/E44B4C2173BB487DAF4728E76F546EA0)

��64λ˫���ȸ�����Ϊ����
* ����λS��ռһλ��0����������1��������
* ָ��λE��ռ11λ��������ʾ�η�����ת����ʮ����ָ��λ�ķ�Χ����0��2047�����ǣ�������ʵ���ÿ�ѧ��������ʾ��ʱ��ָ��λ�ǿ���Ϊ��ֵ�ģ��������ڴ���ָ��λ���Ҫ�渺�Ķ����ƣ���Ҫ�������λ���˷���λ�����һ����˵�ķ���λ������ָ����ָ�������������������鷳�� ����ieee 754��׼������һ��ƫ������˫���ȸ�������ָ��ƫ������1023����Ȼ�������ڴ��д洢ָ��λ�ķ�Χ[0, 2047]��ͳһ��ȥƫ�����͵õ�[-1023, 1024],�����������ʵ�ʴ�������дʱ��ָ��λ�ķ�Χ������Ҫ�ǵõ�����Щֵ�洢�������ʱ��ָ��λҪ����ƫ����1023��
* β��λM����Χ��1��2��ռ52λ�����磺10������400.12����10���ƿ�ѧ��������ʾΪ��4.0012*10^2,������"0012"����β�����֡�


> �����ȸ�����Ҳ���ƣ�ƫ������127��


3. ����������ֵ��Χ����ֵ����

���ݱ�׼��64λ��������ָ�����ֵĳ�����11��������λ����ζ��ָ�����ֵ����ֵ��2047��2��11�η���1����Ҳ����˵��64λ��������ָ�����ֵ�ֵ���Ϊ2047���ֳ�һ���ʾ�������� JavaScript �ܹ���ʾ����ֵ��ΧΪ21024��2-1023�������䣩�����������Χ�����޷���ʾ��

���ָ�����ֵ��ڻ򳬹������ֵ1024��JavaScript �᷵��Infinity������Infinity�Ľ��ܲμ����ģ������Ϊ�������������������ڻ򳬹���С��ֵ-1023�����ǳ��ӽ�0����JavaScript ��ֱ�Ӱ������תΪ0�����Ϊ�������������

```
Number.MAX_VALUE //1.7976931348623157e+308
Number.MIN_VALUE //5e-324

Math.pow(2, 1024) === Infinity // true
Math.pow(2, 1025) === Infinity // true
```

> �������⣺0.1 + 0.2 === 0.3 //false

ԭ����Ҫ�ǣ��������ǽ�0.1��0.2ת���ɶ������Ժ���Чλ������ѭ���ģ����ǲ���64λȥ�洢0.1��0.2�Ļ�����Ϊ��Чλ���֧��53��������λ������ֻ��ȡ��һ���֣���ʱ�Ѿ��о�����ʧ�ˣ�Ȼ����ת���ʮ���ƣ�����ͱ����0.30000000000000004��������0.3.

![image](http://note.youdao.com/yws/res/2626/6F6F3767FB1E4E0AB81F13314790E4C2)

�ο��ĵ���https://www.cnblogs.com/lovelgx/articles/8581610.html



4. �����﷨

* ʮ����д����.�������������0�Ļ���������ʡ��
```
console.log(0 === 0.); //true
console.log(.2 === 0.2); //true
console.log(1e3 === 1000); //true
console.log(0..toString() === 0 .toString()); //true
0.toString() //����д���ᱨ����Ϊ0.��һ������
```
* ������д������0b��ͷ
```
let num = 0b10;
console.log(parseInt(num.toString(10))); //2 ������תʮ����

let num1 = 2;
console.log(parseInt(num.toString(2))); //10 ʮ����ת������
```
* �˽���д������0o��ͷ
```
let num = 0o10;
console.log(parseInt(num.toString(10))); //8  �˽���תʮ����
```
* ʮ������д������0x��ͷ
```
let num = 0o10;
console.log(parseInt(num.toString(10))); //8  ʮ������תʮ����
```


�ο��ĵ���

* ԭ�룬���룬���룺https://zhuanlan.zhihu.com/p/91967268

* ����������֮�գ�https://zhuanlan.zhihu.com/p/28162086

* �������Ƹ�������https://zhuanlan.zhihu.com/p/58731780

* js����ֵ���Ⱥ���ֵ��Χ��https://blog.csdn.net/qizhiqq/article/details/78914523

## String

#### 1. �ַ�����չ��ʷ

����Ҫ˵һ�£�Ϊʲô��Ҫ�ַ��������Ƕ�֪�����е������ڼ�����ж����Զ����Ƶĸ�ʽȥ�洢����ô����ƽʱ������е���Щ�ַ����϶����޷�ֱ�Ӵ洢��������еģ�����Ȼ����Ҫ����Щ�ַ�ת���ɼ��������ʶ������֣���ôת�أ���ʵ������һ��ӳ���ϵ��Ȼ��涨�ַ���Ӧ��������ʲô�����磬����Ҫ�洢a�ַ�����ôʵ�ʴ���һ��97����������01100001�����������ʵ��������encode, ��ô�������ȡ��ʱ�򣬵�����97�����Ǿ��ü������ʾ�ַ�a����������ǽ���decode.


����������ʵ������ζ����ַ���ӳ���ϵ�����ַ������أ�

���ȣ���һ�׶ξ���ASCII����Ҳ�����������������һ���ַ�����������ֻ�涨�������˳��õ�һЩ�ַ���ֻ�ܱ�ʾ256�ĸ��ַ���

�ڶ��׶Σ���ASCII ½�������������ң��������ҷ�����Щ��׼�������㲻���Լ����ҵ��ַ���Ȼ����Լ����������Լ��ı�׼�������й���GB2312��GBK��̨���BIG5��ŷ�޵�ISO�ȵȡ�

�����׶Σ�����ÿ�����Ҷ����Լ���һ�ף�����ȻҲ���кܶ�����ѽ�����Ǿ���Ҫ����һ��ͳһ�ı�׼�������unicode, �����������й��ҵ��ַ���

> �ο��ĵ���
    https://zhuanlan.zhihu.com/p/142646606
    http://www.mamicode.com/info-detail-1943788.html

#### 2. ������Ҫ��
* character �ַ�
* code point ���
* encoding ���뷽ʽ

ע�⣺unicode �� utf������

* unicode���ַ�����Ϊÿһ���ַ�����һ��Ψһid��ѧ����λ/���/code point��
* utf�Ǳ��뷽ʽ��������㡹ת��Ϊ�ֽ����У������ƣ��Ĺ���


unicode��Ȼͳһ��ȫ�����ַ��Ķ����Ʊ��룬��û�й涨��δ洢����x86��amd��ϵ�ṹ�ĵ���С����ʹ���򶼷ֲ��壬�����������ʶ�𵽵���unicode����acsii�ˡ����Unicodeͳһ�涨��ÿ���������������ĸ��ֽڱ�ʾ����ôÿ��Ӣ����ĸǰ����Ȼ�ж��������ֽ���0���ı��ļ��Ĵ�С����˴��������������ڴ洢��˵�Ǽ�����˷ѡ���������һ�������������Unicode�Ķ��ִ洢��ʽ��

��������������ҳ��Ҫ��ʾ�����ַ�������ͳһ��utf-8����Unicode����Ҫ��ʵ�ַ�ʽ֮һ�����⻹��utf-16��utf-32�ȡ�UTF-8���ǹ̶��ֳ�����ģ�����һ�ֱ䳤�ı��뷽ʽ��������ʹ��1~4���ֽڱ�ʾһ�����ţ����ݲ�ͬ�ķ��Ŷ��仯�ֽڳ��ȡ������ֱȽ��������ƣ����һ���ֽڵĵ�һλ��0��������ֽڵ�������һ���ַ��������һλ��1���������ж��ٸ�1���ͱ�ʾ��ǰ�ַ�ռ�ö��ٸ��ֽڡ�


> �ο��ĵ���
https://www.cnblogs.com/crazylqy/p/10183566.html

```
//��ָ���ַ���תΪ������
unction encodeByUtf8 (str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i).toString(2));
    }
    return arr.join(' ');
}

console.log(encodeByUtf8('�Ʊ�')); //111100111010001 110101111010100

// �����Ͼ��ǻ�ȡ�ַ���unicode�룬Ȼ����ת�ɶ����ƵĹ��̡�
```

#### �����﷨

* "abc"
* 'abc'
* \`abc`


## Boolean
�������ͣ��Ƚϼ򵥣����Ľ������true/false, ע�������true����false�ǹؼ��֡�

## undefined/null/void 0

* undefined: ����һ��ȫ�ֱ��������ǿ��Ը�undefiend��ֵ�����Ƽ���
* null������һ���ؼ��֣��޷�������и�ֵ���ᱨ��
* void 0��void���԰��κ�ֵת���undefined

���磺�����ڿ���̨��һ�¾Ϳ��Կ������½����

![image](http://note.youdao.com/yws/res/2378/D79858A753EF4F5981DF957D04433B08)


## Object

![image](http://note.youdao.com/yws/res/2387/F4E496C0AED74001B78EEEC2E8A16560)
![image](http://note.youdao.com/yws/res/2389/A4F5E34783EA41BEBA832FFF942685C9)


�������Ҫ�أ�
* identifier:��Ψһ��ʶ���������һ�㶼�����ڴ��ַ����ʾ�����Ψһ��
* state���������е�����
* behavior���������еķ���

<b>ע�⣺����ƶ����״̬����Ϊ��ʱ��һ��Ҫ��ѭ����Ϊ�ı�״̬����ԭ��</b>


���ȣ���˵һ�¶����е��������ԣ�

* value
* writable
* enumerable
* configurable
* get/set


����˵һ��object�ĳ���API:

#### 1. �Զ�����������
* defineProperty 
* defineProperties
* Object.getOwnPropertyNames() //��ȡ�������������б�������ԭ�Ͷ���
* Object.getOwnPropertyDescriptor() // ��ȡָ���������Ե�����
    
```
let obj = {};
Object.defineProperty(obj, 'name', {
    value: 123
})
console.log(obj.name); //123
console.log(Object.getOwnPropertyNames(obj)); //['name']
console.log(Object.getOwnPropertyDescriptor(obj, 'name')) //{value: 123, writable: false, enumerable: false, configurable: false}
```
#### 2. ���ڶ���ԭ�͵�API
* Object.create() //����һ������ʵ��������ָ������ԭ�Ͷ���
* Object.setPropertyOf() //����ָ���Ķ����ԭ�Ͷ���
* object.getPropertyOf() //��ȡָ�������ԭ�Ͷ���

```
let obj = Object.create({
    a: 123
});

console.log(obj.a); //�����123
console.log(Object.getPrototypeOf(obj)) //�����{a: 123}

//��Ȼ��Ҳ���Բ������µķ�ʽ���������󣬲���ָ��ԭ�Ͷ���
let obj = {};
Object.setPrototypeOf(obj, {
    a: 123
})
console.log(obj.a);
console.log(Object.getPrototypeOf(obj)) //�����{a: 123}

//��ʵ�ʿ����У��Ƽ�ʹ��Object.create���������󣬲���ָ��ԭ�Ͷ���
```
#### 3. �������API�� 

* new
* class
* extends

����˵һ���������Function��

���������������ͨ������ԣ�����һ����Ϊ[[call]]��������Ϊ���Ĵ��ڣ����ǲſ���ͨ��fn()��ʽȥ���ú���������ʵ�ڲ��ǵ�����[[call]]


ע�⣺������˫�����Ŷ�������ԣ����磺[[call]],[[construct]]�����Ƕ��޷�ֱ��ʹ��js����ȥ���ʣ�������������������v8������ǿ��Է��ʵ��ġ�

#### 4. ԭ����

```
//ע�⣺�����ԭ�Ͷ�����һ������
let obj = {name: 'kobe'};
console.log(obj.__proto__ === Object.prototype);//true
console.log(Object.prototype.__proto__); //null
console.log(obj.constructor === Object);//true
console.log(Object.constructor === Function);//true
console.log(Object.prototype.constructor === Object);//true

//ע�⣺������ԭ�Ͷ�����һ��������
let fn = function () {};
console.log(fn.__proto__ === Function.prototype);//true
console.log(Function.prototype.__proto__ === Object.prototype); //true
console.log(fn.constructor === Function)//true
console.log(Function.constructor === Function);//true
console.log(Function.prototype.constructor === Function);//true

//Object,Function,Date �ȶ������õĹ��캯�����������ǵ�__proto__����Function.prototype
console.log(Object.__proto__ === Function.prototype);//true
console.log(Function.__proto__ === Function.prototype); //true
console.log(Date.__proto__ === Function.prototype); //true

```
������������ԭ�Ͷ����Ͼ�������Щ���õķ�����
![image](http://note.youdao.com/yws/res/2511/5E0DEABB2D95498DA7BE24DFBADDE001)
```
//constructor: ָ�򴴽���ǰʵ���Ĺ��캯��

//hasOwnProperty:�жϵ�ǰʵ���Ƿ����ĳЩ���ԣ�������ԭ�Ͷ����ϵ�
let obj = {name: 'kobe'};
console.log(obj.hasOwnProperty('name'));


//isPropertyOf�� �ж϶���1�Ƿ��ڶ���2��ԭ������
let obj = {name: 'kobe'};
let obj2 = Object.create(obj);
console.log(obj.isPrototypeOf(obj2)); //true

//propertyIsEnumerable�� �ж϶�����ָ���������Ƿ��ö�٣���ȻҲ����ʹ��for...in..���ж�
let obj = {name: 'kobe'};
console.log(obj.propertyIsEnumerable('name'));//true


//toString��toLocaleString��
let a = 1234;
console.log(a.toString()); //1234
console.log(a.toLocaleString());//1,234

�ܽ᣺ ���Ͼ���toString()��toLocaleString()��������

1.����������λ��������ʱ��������
2.��Ŀ���Ǳ�׼ʱ���ʽʱ�����������ַ������������

����ɲο���https://www.cnblogs.com/lwwen/p/6400677.html


//valueOf: һ�����ݵ�valueOf�����䱾��
let obj = {name: 'kobe'};
console.log(obj.valueOf());
```

## �����ж�

1. typeof 

��������Ҫ�����жϻ����������ͣ����������������������ͣ��޷��жϣ���ʱ�Ϳ���ʹ��instanceof

2. instanceof
��������Ҫ�����жϾ���������������������

> ��չ��instanceof��ԭ��

3. Ojbect.prototype.toString.call();

�������ַ�ʽ���и��Ե�ȱ�ݣ���û�а취����ͬʱ�ж��ǻ����������ͻ��������������ͣ�ͬʱ������֪�������������������ͣ��𰸾���Object.prototype.toString.call()
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
���Ϊ��

![image](http://note.youdao.com/yws/res/2451/ABAABD444444479780D41897B1EBC5A0)

# �������

#### 1. �������ͨ�Զ������ģ�⺯���͹�������

���ȣ�����Ҫ�˽⺯������͹�������������ͨ����Ĳ�֮ͬ����

��ʵ�ϣ�JavaScript Ϊ��һ�����Ԥ����˽���ֶλ��ƣ����涨�˳���ĺ��������빹��������ĸ��

��������Ķ����ǣ�����[[call]]˽���ֶεĶ��󣬹���������Ķ����ǣ�����˽���ֶ�[[construct]]�Ķ���

��ˣ����ǿ�������˵���κζ���ֻ��Ҫʵ��[[call]]��������һ���������󣬿���ȥ��Ϊ���������á����������ʵ��[[construct]]��������һ�����������󣬿�����Ϊ�����������á�


#### 2. ����

* ����������javascript���������ṩ�Ķ�����������������ṩ��Document,Image��
* ���ö���
    * ԭ�����󣺿������û�ͨ�� Array��RegExp �����ù��������������﷨�����Ķ���
    * ���ж����ɱ�׼�涨������ JavaScript ����ʱ�������Զ������Ķ���ʵ����
    * �Զ��������{}�﷨��Object ���������� class �ؼ��ֶ����ഴ���Ķ������ܹ���ԭ�ͼ̳С�
    

�������������е�ԭ������

![image](http://note.youdao.com/yws/res/2655/1690F4EF7AEB4DD4B9263064CB3A9430)
> �ο��ĵ���https://www.cnblogs.com/zhaoyang007/p/12676381.html
