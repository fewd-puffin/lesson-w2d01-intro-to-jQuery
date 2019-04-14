// click event for gray button


// without the anonymous function:
$('#grayButton').on('click', switchGray);

// with the anonymous
$('#whiteButton').on('click', function() {
  console.log('hellooooooo');
  switchWhite();
})



// click event for white button

function switchGray() {
    // change background to gray
    // change font to white
    $('body').css('background-color', 'gray');
    $('body').css('color', 'white');
}

function switchWhite() {
    // change background to white
    // change font to black
    $('body').css('background-color', 'white');
    $('body').css('color', 'black');
}