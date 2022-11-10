## 什么是FC？

- FC的全称是 Formatting Context, 元素在标准流里面都是属于一个FC的；

- 块级元素的布局属于Block Formatting Context (BFC)
  - 也就是block level box 都是在BFC中布局的；

- 行内级元素的布局属于 Inline Formatting Context (IFC)
  - 而inline level box 都是在IFC中布局的；

- MDN上有整理出在哪些具体的情况下会创建BFC：
  - 根元素（<html>）
  - 浮动元素（元素的float 不是none）
  - 绝对定位元素（元素的position 为 absolute 或 fixed）
  - 行内块元素 （元素的display 为 inline-block）
  - 表格单元格 （元素的display 为 table-cell，html表格单元格默认为该值），表格标题（元素的display 为 table-caption，html表格标题默认为该值）
  - 匿名表格单元格元素 （元素的display 为 table、table-row、table-row-group、table-header-group、table-footer-group（分别是html的 table、row、tbody、thead、tfoot的默认属性）或 inline-block）
  - overflow 计算值（Computed）不为visible的块元素
  - 弹性元素（display为flex 或 inline-flex 元素的直接子元素）
  - 网格元素 （display 为 grid 或 inline-grid 元素的直接子元素）
  - display 值为 flow-root的元素

## BFC有什么作用？

- 在BFC中，box会在垂直方向上一个挨着一个的排布；
- 垂直方向的间距由margin属性决定；
- 在同一个BFC中，相邻两个box之间的margin会折叠（collapse）
- 在BFC中，每个元素的左边缘是紧挨着包含块的左边缘的；

## 那么这个东西有什么用呢？

- 解决margin的折叠问题
  - 让2个box在不同BFC，就可以解决这个问题
- 解决浮动高度塌陷问题
  - 浮动元素的父元素触发BFC，形成独立的块级格式化上下文（Block Formatting Context）
  - 浮动元素的父元素的高度是auto的


- BFC的高度是auto的情况下，是如下方法计算高度的
  - 如果只有inline-level，是行高的顶部和底部的距离
  - 如果有block-level，是由最底层的块上边缘和最底层块盒子的下边缘之间的距离
  - 如果有绝对定位元素，将被忽略
  - 如果有浮动元素，那么会增加高度以包括这些浮动元素的下边缘