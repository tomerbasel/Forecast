$(document).ready(function(){
  ////Click
  $("button").click(function(){
  ///Get element of text box
    var city = $('#text').val();
    alert( "you choose"+city );
  ////POST
 

$.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q="+city,
        type: 'GET',
        dataType : 'json',
        success: function(tomer){
       $('#result1').append("  "+tomer["coord"]["lat"]);
      $('#result2').append("  "+tomer["coord"]["lon"]);
     $('#result3').append("  "+tomer["main"]["humidity"]);
    $('#result4').append("  "+tomer["sys"]["country"]);
  $('#result5').append("  "+tomer["wind"]["speed"]);

        }
      });
    
}); 
});