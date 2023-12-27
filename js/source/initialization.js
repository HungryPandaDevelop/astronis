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

let serviceSlider = $('.service-slider');

serviceSlider.lightSlider({
  item: 1,
  loop: true,
  controls: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  addClass: 'service-slider-light',
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
  loop: false,
  controls: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  addClass: 'project-slider-light',
  // adaptiveHeight: true,

});

$('.next-project').on('click', function (e) {
  e.preventDefault();
  projectsSlider.goToNextSlide();
});

let solutionsSlider = $('.solutions-slider');

solutionsSlider.lightSlider({
  item: 1,
  loop: false,
  controls: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  addClass: 'solutions-slider-light',
  // adaptiveHeight: true,

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
      }
    },
    {
      breakpoint: 576,
      settings: {
        item: 1,
        // controls:false,
        enableDrag: true,
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

