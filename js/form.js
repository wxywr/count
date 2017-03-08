// 生成饮食报告(表单验证)
var form = document.getElementById('form');
var btn = document.querySelector('.report');
var input = document.getElementsByTagName('input');
var no = document.getElementsByClassName('no');
var wrong = document.getElementsByClassName('wrong');
for(var i=0;i<input.length;i++){
	//限制只能输入数字
	input[i].onfocus = input[i].onblur = input[i].onkeyup = function(){
         this.value = this.value.replace(/\D/g, '');
    }
	input[i].onfocus=function(){
		this.placeholder="";
	}
}
input[0].onblur=function(){
	this.placeholder="请输入您的身高";
}
input[1].onblur=function(){
	this.placeholder="请输入您的体重";
}
input[2].onblur=function(){
	this.placeholder="请输入您的年龄";
}
input[3].onblur=function(){
	this.placeholder="请输入数字";
}

 //没有输入任何内容时错误图标显示
btn.onclick=function(){
	for(var m=0;m<input.length;m++){
		if(input[m].value.length < 1){
			for(var n=0;n<no.length;n++){
				no[n].className="error";
			}
			for(var x=0;x<wrong.length;x++){
				wrong[x].className="err";
			}
		}
	}
	return false;
}
