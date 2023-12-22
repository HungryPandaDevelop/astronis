
var st = 0;
window.addEventListener('scroll', function (e) {

  st = $(this).scrollTop();

  if(st > 0){
    $('header').addClass('stick');
  }
  else{
    $('header').removeClass('stick');
  }

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
$('.faq-head').on('click',function(){
  $(this).parent().toggleClass('faq-item--active');
});
/*faq*/

$('.hamburger').on('click',function(){
  $(this).toggleClass('active');

  $('.menu-hamburger').toggleClass('show')

});



function calculatePercentage(value, maxValue) {
  return Math.floor((value / maxValue) * 100);
}
let lengthEl = 10;
for(let i=1; i<lengthEl; i++){
  $('.animate-line-box, .animate-line-box-2').append(`
  <div 
    class="animate-line"
    data-top="${calculatePercentage(i,lengthEl)}"/>
  `)  
}

$('.animate-line-box').append(`
  <div 
    class="animate-line-topic"
    data-top="${lengthEl/2}"><span></span>
  `);

const animateLines = $('.animate-line-box').find('.animate-line');

setTimeout(()=>{

  const delayStep = 0.25;
  animateLines.addClass('transition')
  animateLines.each(function(index){
    let top = $(this).data('top');
    let delayTr = (animateLines.length - 1 - index) * delayStep;
    $(this).css({top: top+'%', 'transitionDuration': delayTr+'s'});
  });
  
},1);

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

const startStroke = (time)=>{
  let delayTime = time;

  const delayStep = delayTime/ animateLines.length;
  
  animateLinesSec.each(function(index){

    let delayTr = (animateLines.length - 1 - index) * delayStep;
  
    $(this).css({'animationDuration': delayTime+'s','animationDelay': delayTr+'s'});
  });
}

// setTimeout(()=>{

//   startStroke(50);
  
// },1);






// setTimeout(()=>{
//   animateLines.removeClass('transition').addClass('animate-down')
// },2000);


$(window).on('wheel', function(event) {
  if (event.originalEvent.deltaY > 0) {
      // Прокрутка вниз
      animateLines.removeClass('transition animate-up').addClass('animate-down')
  } else {
      // Прокрутка вверх
      // animateLines.removeClass('transition animate-down').addClass('animate-up')
  }
  // event.preventDefault();
});



let section  = $('.animate-section');
let activeSectionIndex = -1; 

let homeHeight = $('.main-home').height();

$(window).on('scroll', function() {
  let st = $(this).scrollTop();


    section.each(function(index) {
      let sectionElement = section.eq(index);
      let sectionTop = sectionElement.offset().top;
      let sectionHeight = sectionElement.height();
  
      if (sectionTop <= st && st < sectionTop + sectionHeight) {
        if (activeSectionIndex !== index) {
          if (activeSectionIndex === -1){
          
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