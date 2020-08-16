##### 复习巩固
+ 
##### 盒
HTML代码中可以书写开始__标签__，结束__标签__ ，和自封闭__标签__ 。

一对起止__标签__ ，表示一个__元素__ 。

DOM树中存储的是__元素__和其它类型的节点（Node），如文本节点（文本节点不是元素），因此狭义得说节点包含了所有元素。

CSS选择器选中的是__元素__ 和 伪元素。

CSS选择器选中的__元素__ ，在排版时可能产生多个_盒___（如inline分行，伪元素） 。

排版和渲染的基本单位是_盒__ 

盒模型 = content + padding(内容可排布区域) + border + margin

##### CSS排板
+ 正常流 遵循我们书写文字得习惯 步骤是：收集盒和文字进行、计算盒在行内排布、计算行排布
+ flex
+ grid
+ 可能会有houdni

##### BFC
排版的规则我们主要遵循BFC（区块）及IFC（行内）

###### 正常流的行级排布
盒模型在行内会影响line-top 和 line-bottom，但文字的text-top和text-bottom不会变
行内盒的基线会随着盒内部的文字变化

###### 正常流的块级排布
复杂的机制
+ float与clear 
    + 高度所及的行盒都会受到影响
    + 下一个float也受上一个float的影响
    + clear应该是找一块干净的区域（无float元素的新行）执行我们的动作
    + float会影响重排
+ BFC 边距折叠

###### 一些block的概念
+ Block container 里面有BFC(能容纳正常流的盒就有bfc)
    + block
    + inline-block
    + table-cell
    + flex item
    + grid cell
    + table-caption
+ Block-level Box 外面有BFC
    + Block level
        + block
        + flex
        + table
        + grid
+ Block Box = Block Container + Bloack-level box

###### 设立BFC
+ float
+ position:absolute
+ block container
+ overflow：visible

###### BFC合并
+ block box && overflow:visible
    + float
    + 边距折叠


##### flex排版
+ 收集盒进行
+ 计算盒在主轴位置
+ 计算盒在交叉轴位置  