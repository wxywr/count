// 选择性别、单位
var sex = document.querySelectorAll('.sex');
for(var i = 0;i<sex.length;i++){
	sex[i].index=i;
	sex[i].onclick=function(){
		for(var j=0;j<sex.length;j++){
			sex[j].style.backgroundPosition='1px 1px';
		}
		this.style.backgroundPosition='1px -17px';
	}
}

var unit = document.querySelectorAll('.unit');
for(var i = 0;i<unit.length;i++){
	unit[i].index=i;
	unit[i].onclick=function(){
		for(var j=0;j<unit.length;j++){
			unit[j].style.backgroundPosition='1px 1px';
		}
		this.style.backgroundPosition='1px -17px';
	}
}


//获取当前时间
window.onload=function(){
	var time = document.getElementsByClassName('time')[0];
	if(time){
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth() + 1;
		var dt = d.getDate();
		var today = year + "-" + month + "-" + dt;
		time.innerHTML=today;
	}
}
