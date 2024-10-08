$(document).ready(function(){

let defaultSlider = $('.default-slider');

defaultSlider.lightSlider({
  item: 1,

  loop: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  addClass: 'default-slider-light',
  // adaptiveHeight: true,

});

let solutionSlider = $('.solution-slider');

solutionSlider.lightSlider({
  item: 1,
  pager: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  addClass: 'solution-slider-light',
  // adaptiveHeight: true,

});

let projectsDetail = $('.projects-slider-detail');

projectsDetail.lightSlider({
  item: 1,
  pager: false,
  // controls: true,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  addClass: 'projects-detail-light',
  // adaptiveHeight: true,

});

let serviceSlider = $('.service-slider');

serviceSlider.lightSlider({
  item: 1,
  loop: true,
  controls: true,
  pager: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 750,
  addClass: 'service-slider-light',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        item: 1,
        slideMargin: 30,
      }
    },
  ]
  // adaptiveHeight: true,
  // onSliderLoad: function (el) {
  //   $(el).find('.service-item').removeClass('show').eq(multySlider.getCurrentSlideCount()).addClass('show')
  // },
  // onBeforeSlide: function (el) {
  //   $(el).find('.service-item').removeClass('show').eq(multySlider.getCurrentSlideCount()).addClass('show')
  // }
});

let projectsSlider = $('.projects-slider');

projectsSlider.lightSlider({
  item: 1,
  loop: true,
  controls: true,
  pager: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  galleryMargin: 60,
  slideMargin: 30,
  addClass: 'project-slider-light',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        item: 1,
        slideMargin: 30,
      }
    },
  ]
  // adaptiveHeight: true,

});

$('.prev-project').on('click', function (e) {
  e.preventDefault();
  projectsSlider.goToPrevSlide();
});
$('.next-project').on('click', function (e) {
  e.preventDefault();
  projectsSlider.goToNextSlide();
});

let solutionsSlider = $('.solutions-slider');

solutionsSlider.lightSlider({
  item: 1,
  loop: true,
  controls: true,
  pager: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  addClass: 'solutions-slider-light',
  adaptiveHeight: true,
  slideMargin: 30
});





let partnersSlider = $('.partners-slider');

partnersSlider.lightSlider({
  // item: 4,
  loop: true,
  slideMove: 1,
  controls: false,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  addClass: 'partners-slider-container',
  // adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        item: 4,
      }
    },
    {
      breakpoint: 576,
      settings: {
        item: 2,
      }
    }
  ]
});


let multySlider = $('.multy-slider');

multySlider.lightSlider({
  item: 2,
  loop: false,
  // mode: 'fade',
  controls: false,

  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  // useCSS:false,
  // adaptiveHeight: true,
  slideMargin: 30,
  addClass: 'news-slider-container',
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        item: 2,
        // controls: true,
        enableDrag: false,
        slideMargin: 30,
      }
    },
    {
      breakpoint: 820,
      settings: {
        item: 2,
        // controls:false,
        enableDrag: true,
        slideMargin: 15,
      }
    },
    {
      breakpoint: 576,
      settings: {
        item: 1,
        // controls:false,
        enableDrag: true,
        slideMargin: 15,
      }
    }
  ],
  onSliderLoad: function (el) {

    $(el).find('.lslide').each(function (index) {
      if (index > 1) {
        $(this).css({ 'transform': 'translateX(-' + index * 100 + 'px)', 'zIndex': -1 * index })
        $(this).addClass('no-active')
      }
    });

    //.nextAll().addClass("next-b")
  },
  onBeforeSlide: function (el) {

    $(el).find('.lslide').css({ 'transform': 'translateX(' + 0 + 'px)' })
    $(el).find('.lslide').each(function (index) {
      if (index > multySlider.getCurrentSlideCount()) {
        $(this).css({ 'transform': 'translateX(-' + (index - multySlider.getCurrentSlideCount()) * 100 + 'px)', 'zIndex': -1 * index })
        $(this).addClass('no-active')
      }
    });
    // console.log('onBeforeStart',el);
  }
}


);

$('.news-item').on('click', function () {
  multySlider.goToSlide($(this).index());
});


let thumbSlider = $('.thumb-slider');

thumbSlider.lightSlider({

  gallery: true,
  item: 1,
  thumbItem: 4,
  slideMargin: 0,
  enableDrag: false,
  currentPagerPosition: 'left',
  addClass: 'thumb-slider-light',
});

let thumbSliderVericale = $('.thumb-slider-verticale');

thumbSliderVericale.lightSlider({

  gallery: true,
  item: 1,
  vertical: true,
  verticalHeight: 300,

  enableDrag: true,
  controls: false,
  // vThumbWidth:50,
  thumbItem: 4,
});

$('.input-date').each(function () {
  let dp = new AirDatepicker(this, {
    timepicker: true,
    timeFormat: 'hh:mm AA',
    onSelect({ date }) {
      $(this).addClass('input-empty');
      // console.log('done', date) 
    }
  });
})





var longPhone = 16;
$('.phone-mask').mask('+7(999)999-99-99');
$('.phone-mask').on('keydown', function (e) {
    if(!(e.which >= 48 && e.which <= 57 || e.which == 8) ){
        return false;
    }
});





		// check email
		var r = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		var mailInput;
		var mailFlag = 1;
		var isEmpty = false;

		function checkMail(elThis) {
				mailInput = elThis.val();

				if (!r.test(mailInput)) {
						isEmpty = false;
						elThis.addClass('mail-error');

				} else {
						isEmpty = true;
						elThis.removeClass('mail-error')
				}
		}

		$('.check-mail').on('keyup', function () {
				checkMail($(this));

				if (mailInput.length == 0) {
						$(this).removeClass('mail-error')
				}
		});
		// check email

		// check require

		$('.btn-send').on('click', function (e) {
		
				isEmpty = false;

				checkMail($(this).parents('.form').find('.check-mail'));

				$(this).parents('.form').find('.require').each(function () {

						if ($(this).attr('type') == 'checkbox') {
								if (!$(this).is(':checked')) {
										$(this).parent().addClass('input-error');
										isEmpty = true;
								}
						}
						
						if ($(this).is('.style-select')) {

								if ($(this).prev().attr('data-val') == 0) {

										$(this).prev().addClass('input-error');
										isEmpty = true;
								}
						}

						if ($(this).attr('type') == 'file') {
								$(this).next().addClass('input-error');
								isEmpty = true;
						}

						if (!$(this).val()) {
								isEmpty = true;
								$(this).addClass('input-error');
						}
				});

				setTimeout(function () {
						$('.input-error').removeClass('input-error');
				}, 3000);

				if (isEmpty == true) {
						e.preventDefault();
				};
		});

		// check require
$('.wpcf7-form-control-wrap').each(function(){
  let sizeVal = $(this).find('.wpcf7-form-control').attr('id');
  $(this).addClass(sizeVal);
});


document.addEventListener( 'wpcf7mailsent', function( event ) {
  console.log('mail sent OK');
  // Stuff
  setTimeout(function(){
    $('.element-show').removeClass('active');
  },1500);
  
}, false ); 

// document.addEventListener( 'wpcf7invalid', function( event ) {
  
//   // Stuff
//   setTimeout(function(){
//     $('.wpcf7-form').addClass('init');
//   },1500);
  
// }, false ); 
// img cover start
$('.img-cover').each(function(){
  let imgSrc = $(this).find('img').attr('src');
  //console.log(imgSrc);
  
  $(this).css('background-image', 'url('+imgSrc+')');
});
// img cover file start
 // style input file start

let ObjfieldFile = $('.input-file');
let flagFileMulti;
let textChoise;
let sizeFile;
let nameFile;

function createNewFileContainer(textChoiseParam, flagFileMultiParam, hintParam){
		let fileContainer = $('<div class="file-input-item"><input class="input-file" type="file" data-flagM="'+flagFileMultiParam+'" accept=".jpg,.png"></div>')
		let noticeFile = $('<div class="notice-file notice-big-file"><em>Файл слишком большой</em><i></i></div>');
		let docorateFile = $('<div class="file-decorate"><span>'+textChoiseParam+'</span><i></i></div>');
		
		return fileContainer.append(docorateFile).append(noticeFile);
}

ObjfieldFile.each(function(){

		textChoise = $(this).data('textchoise') ? $(this).data('textchoise') :  'Загрузите изображение';
		flagFileMulti = $(this).data('multy') ?  $(this).data('multy') : 0;
		textHint = $(this).data('hint');

		$(this).replaceWith(createNewFileContainer(textChoise, flagFileMulti, textHint));

});



$('body').on('click', '.file-decorate', function () {

		let container = $(this).parents('.file-input-item');
		container.find('.input-file').trigger('click');
});

$('body').on('change', '.input-file', function () {
		nameFile = $(this).val().replace(/C:\\fakepath\\/i, '');
		let container = $(this).parents('.file-input-item');
		
		if(nameFile.length>0){
				sizeFile = this.files[0].size;
				if(sizeFile < 500000){
						container.find('span').text(nameFile);
						container.addClass('file-decorate-full');

						flagFileMulti = $(this).data('flagm');

						if (flagFileMulti == 1) {
								$(this).parents('.file-input-item').after(createNewFileContainer(textChoise,"1"));
						}
				}
				else{
					
					$(this).parents('.file-input-item').find('.notice-file').addClass('notice-file--show');

					setTimeout(function(){
						$('.notice-file').removeClass('notice-file--show');
					},3000);
				}
		}
});

$("body").on("click", ".file-decorate i", function (e) {
		e.stopPropagation();
		flagFileMulti = $(this).parents('.file-input-item').find('.input-file').data('flagm');
		let container = $(this).parents('.file-input-item');
		console.log(flagFileMulti);
		if (flagFileMulti == 1) {
				container.remove();
		}
		else{
				container.replaceWith(createNewFileContainer(textChoise,"0"));
		}
});
 // style input file end
// custom-select

$('.style-select').each(function () {
  let firstElOption = $(this).find('option:selected').text();
  let dataText = $(this).data('text');
  let dataClass = $(this).data('class');
  $(this).find('option').each(function(index){
    $(this).attr('data-index',index);
  });
  if(dataText){
      firstElOption = dataText;
  }


  let styleSelectBoxElement = 
    $(`<div class='custom-select ${dataClass}'>
        <span>${firstElOption}</span>
        <ul class='ln'></ul>
        <i></i>
      </div>
    `);

  $(this).before(styleSelectBoxElement).hide();

  $(this).find('option').each(function (index) {
      var optionText = $(this).text();
      $(this).parent().prev().find('ul').append('<li data-index="'+index+'" data-value="'+$(this).val()+'">' + optionText + '</li>');
  });
});

$(".custom-select").on('click', function (e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
      $(this).removeClass('active');
  } else {
      $('.custom-select').removeClass('active');
      $(this).addClass('active');
  }
});

$('body').on('click', function (evt) {
  if (!$(evt.target).is('.custom-select, .custom-select > *')) {
      $('.custom-select').removeClass('active');
  }
});

let tempSelectVal;
$('.custom-select').on('click', 'li', function () {
  let liIndex = $(this).data('index');
  let parentsEl = $(this).parents('.custom-select');

  // if(!tempSelectVal){   
  //   tempSelectVal = $(this).remove();
  // }else{
  //   $(this).after(tempSelectVal);
  //   tempSelectVal = $(this).remove();
  // }
  
  parentsEl.next().find('option[data-index="'+liIndex+'"]').prop('selected', true);

  parentsEl.find('span').text($(this).text());
});
// custom-select

$('.close-js').on('click', function () {
    $(this).parents('.element-show').removeClass('show');
});
$('.popup-overlay-js').on('click', function (e) {
    $(this).parents('.element-show').removeClass('show');
});

$(document).on('keyup', (evt) => {
    if (evt.keyCode === 27) {
        $('.element-show').removeClass('show');
    }
});

$('body').on('click', '.element-btn', function (e) {
    e.preventDefault();

    $('.element-show').removeClass('show');
    let activeIndex = $(this).attr('data-element');
    console.log("cl", activeIndex)
    $('[data-element="' + activeIndex + '"].element-show').addClass('show');


});
$('.password-field').on('click','i',changeStatePass);
let visibility = true;
function changeStatePass(){

  console.log(visibility);

  let thisEl = $(this);

  let changePass = (el,type,bool) => {
    $('.password-field').find('input').attr('type',type);
    el.attr('data-visibility', bool);
    visibility = !visibility;
  }

  visibility ? changePass(thisEl,'text', visibility) : changePass(thisEl,'password', visibility)

}



var st = 0;
window.addEventListener('scroll', function (e) {

  st = $(this).scrollTop();

  if (st > 0) {
    $('header').addClass('stick');
  }
  else {
    $('header').removeClass('stick');
  }

});

$('.scroll-home').on('click', function () {
  $('html, body').animate({ scrollTop: $('.about-section').offset().top - 100 + 'px' });
});


$('.competencies-item').mousemove(function (event) {

  let curX = (event.offsetX - 42);
  let curY = (event.offsetY - 42);

  $(this).find('.btn-item-plus').css({
    left: (curX) + 'px',
    top: (curY) + 'px'
  });
});


// $(window).on('load',function(){
//   $('.preload').addClass('load');
//   setTimeout(function(){
//     $('.preload').addClass('hide');
//   },2000)
// });





// video play rew

// $('.video-btn').on('click',function(){
//   $(this).hide();
//   $(this).prev()[0].play();
// });




/*faq*/
$('.faq-head').on('click', function () {
  $(this).parent().toggleClass('faq-item--active');
});
/*faq*/

$('.hamburger').on('click', function () {
  $(this).toggleClass('active');

  $('.menu-hamburger').toggleClass('show')

});



function calculatePercentage(value, maxValue) {
  return Math.floor((value / maxValue) * 100);
}
let lengthEl = 10;
for (let i = 1; i < lengthEl; i++) {
  $('.animate-line-box, .animate-line-box-2').append(`
  <div 
    class="animate-line"
    data-top="${calculatePercentage(i, lengthEl)}"/>
  `)
}

$('.animate-line-box').append(`
  <div 
    class="animate-line-topic"
    data-top="${lengthEl / 2}"><span></span>
  `);

const animateLines = $('.animate-line-box').find('.animate-line');

setTimeout(() => {

  const delayStep = 0.25;
  animateLines.addClass('transition')
  animateLines.each(function (index) {
    let top = $(this).data('top');
    let delayTr = (animateLines.length - 1 - index) * delayStep;
    $(this).css({ top: top + '%', 'transitionDuration': delayTr + 's' });
  });

}, 1);

// setTimeout(()=>{

//   const time = 30;
//   const delayStep = animateLines.length / time;

//   animateLines.each(function(index){
//     let delayTr = (index) * delayStep;
//     $(this).css({ 'transitionDuration': '1s', 'transitionDelay': delayTr+'s'});
//     $(this).addClass('transition-hide');
//   })

// },2000);



const animateLinesSec = $('.animate-line-box-2').find('.animate-line');

const startStroke = (time) => {
  let delayTime = time;

  const delayStep = delayTime / animateLines.length;

  animateLinesSec.each(function (index) {

    let delayTr = (animateLines.length - 1 - index) * delayStep;

    $(this).css({ 'animationDuration': delayTime + 's', 'animationDelay': delayTr + 's' });
  });
}

// setTimeout(()=>{

//   startStroke(50);

// },1);






// setTimeout(()=>{
//   animateLines.removeClass('transition').addClass('animate-down')
// },2000);


$(window).on('wheel', function (event) {
  if (event.originalEvent.deltaY > 0) {
    // Прокрутка вниз
    animateLines.removeClass('transition animate-up').addClass('animate-down')
  } else {
    // Прокрутка вверх
    // animateLines.removeClass('transition animate-down').addClass('animate-up')
  }
  // event.preventDefault();
});



let section = $('.animate-section');
let activeSectionIndex = -1;

let homeHeight = $('.main-home').height();

$(window).on('scroll', function () {
  let st = $(this).scrollTop();


  section.each(function (index) {
    let sectionElement = section.eq(index);
    let sectionTop = sectionElement.offset().top;
    let sectionHeight = sectionElement.height();

    if (sectionTop <= st && st < sectionTop + sectionHeight) {
      if (activeSectionIndex !== index) {
        if (activeSectionIndex === -1) {

        }
        activeSectionIndex = index;

      }
    }
  });


});



// setTimeout(()=>{
//   $('.animate-line-topic').addClass('animate')
// },500)

// setTimeout(()=>{
//   $('.animate-line-topic').addClass('animate-2')
// },5000)
let detailTabs = $('.tabs');
if(detailTabs.length > 0){
  const onHoverMoveCarriage = function(num){
    let widthCarriage = detailTabs.find('li').eq(num).width();
    let offsestLeftCarriage = detailTabs.find('li').eq(num).position().left;
    $('.tabs-carriage').css({width: widthCarriage+'px', left: offsestLeftCarriage+'px'});
  }
  let timeOutId;
  let curretTabs = 0;
  let timeReturn = 500;

  detailTabs.find('li').hover(
  function(){

    clearInterval(timeOutId)
    onHoverMoveCarriage($(this).index());

  
  },function(){

    timeOutId = setTimeout(function(){
      onHoverMoveCarriage(curretTabs);
    }, timeReturn);
  });

  detailTabs.find('li').on('click',function(){
    
    curretTabs = $(this).index();
    detailTabs.find('li').removeClass('active').eq(curretTabs).addClass('active');
    onHoverMoveCarriage(curretTabs);

    $('.tabs-item').removeClass('active').eq(curretTabs).addClass('active');
  });

  onHoverMoveCarriage(0);

}
});
//# sourceMappingURL=common-dist.js.map