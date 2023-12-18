let defaultSlider = $('.default-slider');

defaultSlider.lightSlider({
  item:1,
  loop:false,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  addClass: 'default-slider-light',
  adaptiveHeight: true,

});  

let partnersSlider = $('.partners-slider');

partnersSlider.lightSlider({
  item: 4,
  loop: true,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  addClass: 'partners-slider-container',
  // adaptiveHeight: true,
});  


let multySlider = $('.multy-slider');

multySlider.lightSlider({
  item: 2,
  loop:false,
  // mode: 'fade',
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  // useCSS:false,
  // adaptiveHeight: true,
  slideMargin: 30,
  addClass: 'news-slider-container',
  onSliderLoad: function (el) {
    // $(el).find('.active').next().next().addClass("next-a")
    $(el).find('.lslide').each(function(index){
      $(this).addClass('next-'+index)
    })
    
    //.nextAll().addClass("next-b")
},
  onBeforeSlide: function (el) {
      // $(el).find('.lslide').removeClass("next-a")
      $(el).find('.lslide').removeClass("next-b")
      // $(el).find('.active').next().next().addClass("next-a")
      $(el).find('.active').nextAll().addClass("next-b")
      // console.log('onBeforeStart',el);
    } 
  });  




let thumbSlider = $('.thumb-slider');

thumbSlider.lightSlider({

  gallery:true,
  item:1,
  thumbItem:4,
  slideMargin:0,
  enableDrag: false,
  currentPagerPosition:'left',
  addClass: 'thumb-slider-light',
});  

let thumbSliderVericale = $('.thumb-slider-verticale');

thumbSliderVericale.lightSlider({

  gallery:true,
  item:1,
  vertical:true,
  verticalHeight:300,
  
  enableDrag: true,
  controls: false,
  // vThumbWidth:50,
  thumbItem:4,
});  

$('.input-date').each(function(){
  let dp = new AirDatepicker(this,{
    timepicker: true,
    timeFormat: 'hh:mm AA',
    onSelect({date}) {
      $(this).addClass('input-empty');
      // console.log('done', date) 
    }
  });
})

