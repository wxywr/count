// 选择性别、单位
var sex = document.querySelectorAll('.sex');
for(var i = 0;i<sex.length;i++){
	sex[i].index=i;
	sex[i].onclick=function(){
		for(var j=0;j<sex.length;j++){
			sex[j].style.backgroundPosition='1px 1px';
		}
		this.style.backgroundPosition='1px -18px';
	}
}

var unit = document.querySelectorAll('.unit');
for(var i = 0;i<unit.length;i++){
	unit[i].index=i;
	unit[i].onclick=function(){
		for(var j=0;j<unit.length;j++){
			unit[j].style.backgroundPosition='1px 1px';
		}
		this.style.backgroundPosition='1px -18px';
	}
}


// 生成饮食报告(表单验证)
var form = document.getElementById('form');
var btn = document.querySelector('.report');
var input = document.getElementsByTagName('input');
var no = document.getElementsByClassName('no');
var wrong = document.getElementsByClassName('wrong');
btn.onclick=function(){
	for(var i=0;i<input.length;i++){
		//限制只能输入数字
		input[i].onfocus = input[i].onblur = input[i].onkeyup = function(){
             this.value = this.value.replace(/\D/g, '');
        }
        //输入内容全部为空时错误图标显示
		if(input[i].value.length < 1){
			for(var m=0;m<no.length;m++){
				no[m].className="error";
			}
			for(var n=0;n<wrong.length;n++){
				wrong[n].className="err";
			}
		}
	}
	return false;
}