## 用div代替textarea ##

1. 使用情形 
	
	作为多行文本域功能来讲，textarea满足了我们大部分的需求。然而，textarea有一个不足就是不能像普通div标签一样高度可以跟随内容自适应。textarea总是很自信地显摆它的滚动条，高度固执地岿然不动。所以，有时候，为了增加交互体验想让文本域高度自适应的时候，就会遇到麻烦。	

2. 实现原理

	在一个普通的block上增加一个属性 `contenteditable="true"`就可以了
	
	`<div contenteditable="true" class="test_box"></div>` 
	
	contenteditable属性虽是HTML5里面的内容，但是IE似乎老早就支持此标签属性了。所以，兼容性方面还是不用太担心的。关于这个div css代码如下

	    .test_box{
    		width: 400px;
    		min-height: 120px;
    		max-height: 300px;
    		_height: 120px;/*IE6*/
    		padding: 3px;
    		outline: 0;/*与原textarea一致*/
    		border: 1px solid #a0b3d6;
    		font-size: 12px;
    		word-wrap: break-word;
    		overflow-x: hidden;
    		overflow-y: auto;
    		_overflow-y: visible;/*IE6*/
    	}
	
3. 注意与说明

	
	1. 现代浏览器如Firefox在可编辑模式下的div获取焦点的时候会有虚框，而实际上textarea是没有虚框显示的，此迹象会暴露出div是个冒牌货，所以，需要添加下面的样式：
	
    		`outline:0 `

	2. Firefox浏览器下可编辑模式的div如果内部元素是空空的，那么其在获取焦点是时候，光标不可见或是与外部div齐高，这也是会暴露出自己是textarea冒牌货的，所以，默认情况下，我们可以在此div中增加一个孤单的<br />换行标签。但是，IE8下，如果有个默认的br标签，光标位置可能会在第二行闪来闪去，所以，IE8下可编辑div里面默认是不能有br标签的
	
	3. IE浏览器下（IE6~8），输入文字回车的时候，div内部是会自动产生p标签包含每行元素的，而其他浏览器貌似是产生br标签（这里尚未全部测试，如有不准，欢迎指正）。由于默认的p标签是有1em大小的上下margin值的，为了效果统一，我们可以设置诸如下面的样式清除p标签的margin值：
	
    		.test_box p{ margin: 0; } 
	
	