JS���ʽ | ������ͱ��ʽ
Atom
 Expression
 Statement
 Structure
 Program/Module
Grammar: Tree vs Priority
Expressions
Member:
	a.b, a[b], foo `string` ,super.b,super['b'], new.target, new Foo()

New:
	new Foo

	Example:
		new a()()
		new new a()

Reference��
	Object, Key, delete, assign;

Call:��������
	foo(), super(), foo()['b'], foo().b, foo() `abc`
	Example 
		new a()['b'];

Left Handside & Right Handside
	Example:
		a.b = c, a + b = c (����);
	
	 ���е�expression���������Left Handside ��һ��Right Handside;
	 Left Handsie : �ܲ��ܷŵ��Ⱥŵ����

Update:
	a++, a--, --a, ++a;

Unary:(��Ŀ����)
	delete a.b, void foo(), typeof a, +a, -a, ~a, !a, await a;

Exponental:(�ҽ��)
	**;

	Example��
	3**2**3 ��Ч�� 3**(2**3)

Multiplicative:
	*, /, %;

Additive:

- , -;

Shift:
	<<, >>, >>>;

Relationship:
	<, >, <=, >=, instanceof, in;

Equality:
	==, !=, ===, !==;

Bitwise:
	&, ^, |;

Logical:
 &&, ||;

Conditional:
	condition ? expression1 : expression2
JS���ʽ | ����ת����Type Convertion��
js�е� ˫�Ⱥ� ��һ����bug��������Ҫʹ��˫�Ⱥţ�==��ʹ�� ���Ⱥţ�===����˫�ȺŻ�������ת����

����ת����Unboxing��

To Premitive 
toString vs valueOf
Symbol.toPrimitive 

var o = {
	toString(){return "2"},
	valueOf(){return 1},
	[Symbol.toPrimitive]() {return 3}
}

o + 1 �����ȵ���valueOf�����û���ٵ���toString,�����Symbol.toPrimitive����û�оͱ���

����Ϊo��������ʱ���ȵ���toString������	

װ��ת����Boxing��

����         ����                      ֵ
Number      new Number(1)              1
String      new String('a')           "a"
Boolean     new Boolean(true)         true
Symbol      new Object(Symbol("a"))   Symbol("a")

number���ͺ�Number�಻��ͬһ������������ͬ��
JS��� | ����ʱ��ظ���
Statement

����䡢�����䡢����
����ʱ runtime

Completion Record ��ɼ�¼
��ɣ�
	[[type]] :normal, break, continue, return, or throw

	[[value]] : ��������

	[[target]] : label (��ʶ�� + :)
JS��� | �����͸������
����䣺
	ExpressionStatement�����ʽ + ��
	EmptyStatement: ;
	DebuggerStatement: debugger;
	ThrowStatement: throw + ���ʽ
	ContinueStatement: continue ��������ѭ���������ѭ������
	BreakStatement: ��͸�Խ�������ѭ��
	ReturnStatement��һ�����������ã�����һ��ֵ��

������䣺
	BlockStatement: һ�Ի������е�����
	IfStatement: if������̷�֧����
	SwitchStatement: switch...case ������̿���
	IterationStatement:������䣬for ;, for in , for of,  for await,while, do while, ��ѭ��
	WithStatement:with��䣬��������
	LabelledStatement:
	TryStatement��try{}catch(e){}finally{}
JS��� | ����
FucntionDeclaration:
	��ͨ����������function foo(){}

GeneratorDeclaration:
	����������������generate ������
		function* bar(){}

AsyncFunctionDeclaration:
	async function foo(){}

AsyncGeneratorDeclaration:
	async function* bar(){}

VariableStatement:
	var ��������������������Ԥ������ƣ�

ClassDeclaration:
	class ������������֮ǰ�ᱨ��Ԥ������ƣ�
		class Person{

		}

LexicalDeclaration:
	const, let ����������������֮ǰ�ᱨ��

Ԥ�����ȥ��var�����ı��������ڱ�������������ʹ��const,let,class������
JS�ṹ�� | �������΢����
���������������������apiִ�е�����setTimeout
΢���� MicroTask����js���棩Promise
�������ã�
���/������
���ʽ��
ֱ����/����/this...

�¼�ѭ������������js����ĸ��������node
JS�ṹ�� | JS��������
�������΢�����Ӱ�����ִ�еĴ���
ͬһ��΢�������в�ͬ�ĺ�������Ӱ������ִ�У�

ջʽ��stack��������ִ�������ģ�Excution Context Stack;
ջ�Ķ���������ִ�е�ִ�������ģ�Running Excution Context;
Excution Context:
	code evalution state
	Function
	Script or Module
	Generator
	Realm : �������е����ö���
	LexicalEnvironment���������
	VariableEnvironment��var���������Ļ���

	LexicalEnvironment:���������
		this, new.target, super, ����
	
	VariableEnvironment:��ʷ�����İ������������ڴ���var������


	Environment Records
		 Declarative Environment Records
				Function Environment Records
				module Environment Records

		 Global Environment Records

		 Object Environment Records

		 Function - Closure ���հ���

		 var y = 2;
		 function foo2(){
			 var z = 3;
			 return () => {
				 //ͬʱ���Է��� y, z, this,�����Ǳհ�
				 console.log(y, z);
			 }
		 }
		 var foo3 = foo2();
		 export foo3; 


		 Realm�������е��������ö������Realm;
