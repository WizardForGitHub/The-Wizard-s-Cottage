
function zixvanxiangka(bt,di){
	this.bt=bt;
	this.di=di;
}
function xvanxiangka(){
	this.active=-1;
	this.zixvanxiangkas=null;
}
xvanxiangka.prototype.cl=function(){
	var _this = this;
	for (var i = 0;i<this.zixvanxiangkas.length;i++) {
		this.zixvanxiangkas[i].bt.index=i;
		this.zixvanxiangkas[i].bt.onclick=function(){
			/*alert(this.index);*/
			
			_this.mfChange(this.index);
			
		}
	}
}
xvanxiangka.prototype.initialition=function(){
		var t =[];
		var bts = document.getElementById('div1').getElementsByTagName('input');
		var divs = document.getElementById('div1').getElementsByTagName('div');
		var zixvan = new zixvanxiangka();
		for (var i =0;i<bts.length;i++) {
			var x = new zixvanxiangka(bts[i],divs[i]);
			t.push(x);
		}
		this.zixvanxiangkas=t;
		/*-------------------------------------*/
		this.mfChange(0);
		/*-------------------------------------*/
}

xvanxiangka.prototype.mfChange = function(index){
			this.active=index;
		for (var i=0;i<this.zixvanxiangkas.length;i++) {
			this.zixvanxiangkas[i].bt.className=null;
			this.zixvanxiangkas[i].di.style.display='none';
		}
		this.zixvanxiangkas[this.active].di.style.display='block';
		this.zixvanxiangkas[this.active].bt.className='active';
}





/*xvanxiangka.prototype.initialition=function{*/
/*	var bts = document.getElementsByTagName('input');
	var divs = document.getElementsByTagName('div');
	window.onload =function(){
		bts = document.getElementsByTagName('input');
		divs = document.getElementsByTagName('div');
		alert('111');
	}
	alert('11111');
}*/