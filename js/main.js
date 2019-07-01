$(function(){

  $('body').append('<div class="layer layer1"></div>');
  $('body').append('<div class="layer layer2"></div>');
  $('body').append('<div class="layer layer3"></div>');
 
  var $layer1=$('.layer1');
  var $layer2=$('.layer2');
  var $layer3=$('.layer3');
  var mv1 = 1; 
  var mv2 = 1; 
  var mv3 = 1; 
  var draw = function(){
    mv1 += 1; 
    mv2 -= 2; 
    mv3 += 3; 
  
    $layer1.css('background-position-x',mv1+'px');
    $layer1.css('background-position-y',mv2+'px');
 
    $layer2.css( 'background-position-x' ,mv2+'px');
    $layer2.css( 'background-position-y',mv1+'px');

    $layer3.css( 'background-position-x' ,mv3+'px');
    $layer3.css( 'background-position-y',mv3+'px');
 
    setTimeout(draw,100);
  };
  draw();
});
