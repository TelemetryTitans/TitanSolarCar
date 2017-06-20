//DETECT SCREEN SIZE & REDIRECT

function button(){
  var width = $( window ).width();
  if(width < 1000){
    location.href = "/7";
  }
  else{
    location.href = "/15";
  }
}
