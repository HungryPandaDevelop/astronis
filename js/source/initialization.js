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
  item: 3,
  loop:false,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  adaptiveHeight: true,

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

