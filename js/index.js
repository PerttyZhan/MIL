
(function(){

	var animate = {
		init:function(){

			this.header = this.getJson( $('#header') );
			this.blog = this.getJson( $('#blog') );
			this.intro = this.getJson( $('#intro') );
			this.join = this.getJson( $('#join') );

			this.addEvent();
		},
		initAnimate:function(){

			var wjson = this.getClient();

			if( this.header != null && this.intense( this.header,wjson ) ){

				this.header.obj.find('.topbar,.fouse-des,.shequ,.mouse').addClass('animated fadeInDown')
				this.header.obj.find('.topbar').addClass(' animateDelay0');
				this.header.obj.find('.fouse-des').addClass(' animateDelay1');
				this.header.obj.find('.shequ').addClass(' animateDelay2');
				this.header.obj.find('.mouse').addClass(' animateDelay3');

				this.header = null ;
			}else if( this.blog != null && this.intense( this.blog,wjson ) ){

				this.blog.obj.find('.cat-item').addClass('animated silde');
				this.blog = null ;

			}else if( this.intro != null && this.intense( this.intro,wjson ) ){

				this.intro.obj.find('.intro-show').addClass('animated fadeInLeft');
				this.intro = null ;
			}
		},
		addEvent:function(){

			var This = this;
			$(window).scroll( $.proxy( This.scrollEvent,This ) );
		},
		scrollEvent:function(){

			var wjson = this.getClient();

			if( this.header != null && this.intense( this.header,wjson ) ){

				this.header.obj.find('.topbar,.fouse-des,.shequ,.mouse').addClass('animated2 fadeInDown')
				this.header.obj.find('.topbar').addClass(' animateDelay0');
				this.header.obj.find('.fouse-des').addClass(' animateDelay1');
				this.header.obj.find('.shequ').addClass(' animateDelay2');
				this.header.obj.find('.mouse').addClass(' animateDelay3');
				this.header = null ;

			}else if( this.blog != null && this.intense( this.blog,wjson ) ){

				this.blog.obj.find('.cat-item,.page-item').addClass('animated2 silde');
				this.blog.obj.find('.page-item').addClass('animateDelay1');
				this.blog = null ;

			}else if( this.intro != null && this.intense( this.intro,wjson ) ){

				this.intro.obj.find('.intro-show').addClass('animated2 fadeInLeft');
				this.intro = null ;

			}else if( this.join != null && this.intense( this.join,wjson ) ){

				this.join.obj.find('h1,p').addClass('animated2 fadeInDown')
				this.join.obj.find('p').addClass(' animateDelay2');
				this.join.obj.find('.type').addClass('animated2 zoomIn animateDelay3');
				this.join = null ;

			}
		},
		getJson:function($p){

			var w,h,t,l;
			w = $p.width();
			h = $p.height();
			l = $p.offset().left;
			t = $p.offset().top;

			return {obj:$p,width:w,height:h,left:l,top:t};
		},
		getClient:function(){

			var w,h,t,l;

			l = $(window).scrollLeft();
			t = $(window).scrollTop();
			w = $(window).width();
			h = $(window).height()/4;

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