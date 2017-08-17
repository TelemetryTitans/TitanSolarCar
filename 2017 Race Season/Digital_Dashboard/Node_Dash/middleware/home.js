//DETECT SCREEN SIZE & REDIRECT
//Onload function will detect the size of the screen and redirect accordingly. If screen is less than 1000px wide,
//7html will load, else, 15html will load.

function button(){
  var width = $( window ).width();
  if(width < 1000){
    location.href = "/7";
  }
  else{
    location.href = "/15";
  }
}
