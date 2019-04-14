

//turnOffLights(light) {

//}

// turn on stop function
 $('#stopButton').on('click',turnOnStopLight); 
function turnOnStopLight() {
// change background color of stop light to red
 $('#stopLight').css('background-color','red');

// changes background color of green and yellow to black
 $('#slowLight').css('background-color','black');
 $('#goLight').css('background-color','black');
}

// turn on slow function
 
// change background color of slow light to yellow
 $('#slowButton').on('click',turnOnSlowLight); 
function turnOnSlowLight() {
 $('#slowLight').css('background-color','yellow');

// changes background color of red and green to black
 $('#stopLight').css('background-color','black');
 $('#goLight').css('background-color','black');
}
  
// turn on go function
// change background color of go light to green
 $('#goButton').on('click',turnOnGoLight); 
 function turnOnGoLight() {  
 $('#goLight').css('background-color','green');

// changes background color of red and yellow to black
 $('#stopLight').css('background-color','black');
 $('#slowLight').css('background-color','black');
 }
    
// set stop light click event
//event listener blah blah
//turnOffLights($(this))

$('#stopLight').css('background-color','red');
$('#slowLight').css('background-color','yellow');
$('#goLight').css('background-color','green');

$('#stopButton','#slowButton','#goButton').on('click',turnOffLights);
function turnOffLights() {
  var black = $(stopLight).css('background-color','black');
  var black1 = $(slowLight).css('background-color','black');
  var black2 = $(goLight).css('background-color','black');
  var id = $(this).attr('id');
  if ( id === 'stopButton') {
   $('#stopLight').css(black);
  } else if ( id === 'slowButton') {
   $('#slowLight').css(black1);
  } else {
    $('#goLight').css(black2);
  }
}
 
// set slow light click event

// set go light click event


$('#traffic-light').on('click',turnOffLights);
function turnOffLights() {

  var id = $(this).attr('id');
  var red = $(this).css('background-color','red');
  var yellow = $(this).css('background-color','yellow');
  var green = $(this).css('background-color','green');
  if ( id === 'stopButton') {
    
   $(stopLight).css(red);
  } else if ( id === 'slowButton') {
   $(slowLight).css(yellow);
  } else {
    $(goLight).css(green);
  }

}