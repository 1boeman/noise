$(function(){
  var layers=[];
  for (var i=0; i < 5; i++){
    j = i+1;
    $('body').append('<div class="layer layer'+j+'"></div>');
    layers.push($('.layer'+j));
  }

  var mv1 = 1; 
  var mv2 = 1; 
  var mv3 = 1; 
  var mv4 = 1;
  var drawFunctions=[]; 
  var current = 0; 
  var speed=1;
  drawFunctions[0] = function(){
    mv1 += 1; 
    mv2 -= 1; 
    mv3 -= 0.5; 
    mv4 += 0.5; 
    layers[0].css('background-position-x',mv1+'px');
    layers[0].css('background-position-y',mv2+'px');
 
    layers[1].css( 'background-position-x' ,mv4+'px');
    layers[1].css( 'background-position-y',mv3+'px');

    layers[2].css( 'background-position-x' ,mv3+'px');
    layers[2].css( 'background-position-y',mv1+'px');
 
    setTimeout(drawFunctions[current],speed);
  };
  drawFunctions[1] = function(){
    mv1 -= 0.2; 
    mv2 += 0.2; 
    mv3 += 0.1; 
    mv4 -= 0.1; 
    layers[0].css('background-position-x',mv1+'px');
    layers[0].css('background-position-y',mv2+'px');
 
    layers[1].css( 'background-position-x' ,mv4+'px');
    layers[1].css( 'background-position-y',mv3+'px');

    layers[2].css( 'background-position-x' ,mv3+'px');
    layers[2].css( 'background-position-y',mv1+'px');
 
    setTimeout(drawFunctions[current],speed);
  };
  drawFunctions[2] = function(){
    mv1 -= 0.3; 
    mv2 += 0.3; 
    mv3 += 0.4; 
    mv4 -= 0.2; 
    layers[0].css('background-position-x',mv1+'px');
    layers[0].css('background-position-y',mv2+'px');
 
    layers[1].css( 'background-position-x' ,mv4+'px');
    layers[1].css( 'background-position-y',mv3+'px');

    layers[2].css( 'background-position-x' ,mv3+'px');
    layers[2].css( 'background-position-y',mv1+'px');
 
    setTimeout(drawFunctions[current],speed);
  };
  drawFunctions[3] = function(){
    mv1 -= 0.3; 
    mv2 -= 0.7; 
    mv3 -= 0.4; 
    mv4 -= 0.1; 
    layers[0].css('background-position-x',mv1+'px');
    layers[0].css('background-position-y',mv2+'px');
 
    layers[1].css( 'background-position-x' ,mv4+'px');
    layers[1].css( 'background-position-y',mv3+'px');

    layers[2].css( 'background-position-x' ,mv3+'px');
    layers[2].css( 'background-position-y',mv1+'px');
 
    setTimeout(drawFunctions[current],speed);
  };


 
  setInterval(function(){     var min=1; 
    var max=100;  
    speed =Math.floor(Math.random() * (+max - +min)) + +min; 
   },5000)
  setInterval(function(){current++; if (current==drawFunctions.length) {current=0}},speed);
  drawFunctions[current]();
});
