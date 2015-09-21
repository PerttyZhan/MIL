
(function(){

	var animate = {
		init:function(){

			this.header = this.getJson( $('#header') );
			this.blog = this.getJson( $('#blog') );
			this.intro = this.getJson( $('#intro') );
			this.join = this.getJson( $('#join') );
			this.module = $('*[module="runto"]');
			this.btnLogin = $('#login');
			this.closeLoin = $('.icon-close');
			this.addEvent();
		},
		initAnimate:function(){

			var wjson = this.getClient();

			if( this.header != null && this.intense( this.header,wjson ) ){

				this.header.obj.find('.topbar,.fouse-des,.shequ,.mouse').addClass('animated fadeInDown')
				this.header.obj.find('.topbar').addClass(' animateDelay05');
				this.header.obj.find('.fouse-des').addClass(' animateDelay1');
				this.header.obj.find('.shequ').addClass(' animateDelay2');
				this.header.obj.find('.mouse').addClass(' animateDelay3');
				this.header = null ;

			}else if( this.blog != null && this.intense( this.blog,wjson ) ){

				this.blog.obj.find('.cat-item,.page-item').addClass('animated silde');
				this.blog.obj.find('.page-item').addClass('animateDelay05');
				this.blog = null ;

			}else if( this.intro != null && this.intense( this.intro,wjson ) ){

				this.intro.obj.find('.intro-show').addClass('animated fadeInLeft');
				this.intro = null ;

			}else if( this.join != null && this.intense( this.join,wjson ) ){

				this.join.obj.find('h1,p').addClass('animated fadeInDown')
				this.join.obj.find('p').addClass(' animateDelay1');
				this.join.obj.find('.join-me').css('-webkit-transform','rotate(0deg)');
				this.join.obj.find('.type').addClass('animated zoomIn animateDelay2');
				this.join = null ;

			}
		},
		addEvent:function(){

			var This = this;
			this.initAnimate();
			$(window).scroll( $.proxy( This.scrollEvent,This ) );
			for( var i=0,max=this.module.length;i<max;i++){

				this.module.eq(i).on('click',This.runto);
			}
			this.btnLogin.on('click',This.loginEvent);
			this.closeLoin.on('click',This.closeEvent);
		},
		scrollEvent:function(){
			var This = this;
			this.initAnimate.call(This);
		},
		runto:function(event){
			event.preventDefault();

			var data = $(this).data('to'),scrollTop = $(data).offset().top;

			$('html,body').animate({
				'scrollTop':scrollTop
			},1000,'swing');
			//$(window).scrollTop(scrollTop);
		},
		loginEvent:function(event){
			event.preventDefault();
			$('#shadow').addClass('animated05 scaleandrotate');
		},
		closeEvent:function(event){
			event.preventDefault();
			$('#shadow').removeClass('animated05 scaleandrotate');
		},
		getJson:function($p){

			if( $p.length == 0 ){return;}
			var w,h,t,l;
			w = $p.width();
			h = $p.outerHeight()/2;
			l = $p.offset().left;
			t = $p.offset().top + $p.outerHeight()/2;

			return {obj:$p,width:w,height:h,left:l,top:t};
		},
		getClient:function(){

			var w,h,t,l;

			l = $(window).scrollLeft();
			t = $(window).scrollTop();
			w = $(window).width();
			h = document.body.clientHeight;

			return {width:w,height:h,left:l,top:t};
		},
		intense:function(rec1,rec2){

			var lc1,lc2,tc1,tc2,w1,h1;

			lc1 = rec1.left + rec1.width/2;
			lc2 = rec2.left + rec2.width/2;
			tc1 = rec1.top + rec1.height/2;
			tc2 = rec2.top + rec2.height/2;
			w1 = ( rec1.width + rec2.width )/2;
			h1 = ( rec1.height + rec2.height )/2;

			return Math.abs(lc1 - lc2) < w1 && Math.abs(tc1 - tc2) < h1;
		},
		overHeight:function(rec1,rec2){

			var lct = rec1.top + rec1.height()/2;
			var tct = rec2.top + rec2.height()/2;


		}

	};

	animate.init();
})();