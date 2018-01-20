$( document ).ready(function() {
const $clouds = $('.cloud1, .cloud2, .cloud3, .cloud4'); 
jQuery.fn.shake = function() {
  this.each(function(i) {
      $(this).css({
          "position": "absolute"
      });
      for (var x = 1; x <= 3; x++) {
          $(this).animate({
              left: 43
          }, 10).animate({
              left: 23
          }, 50).animate({
              left: 23
          }, 10).animate({
              left: 13
          }, 50).animate({
              left: 43
          }, 50).animate({
              left: 33
          }, 50).animate({
              left: 43
          }, 50);
      }
  });
  return this;
}

$clouds.hide();

function toRoman(num) {  
    var result = '';
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    for (var i = 0;i<=decimal.length;i++) {
      while (num%decimal[i] < num) {     
        result += roman[i];
        num -= decimal[i];
      }
    }
    return result;
  }
  
  $ ( '#romanize' ).click(function(){
    $( '#output' ).empty();
    $( '#output' ).append(toRoman($('#input-number').val()));
    $clouds.show().shake().fadeOut();

  });
  
  $('#input-number').keyup(function(event){
    if (event.keyCode == 13) {
      $('#romanize').click();
    }
  });




});