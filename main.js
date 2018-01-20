$( document ).ready(function() {
const $clouds = $('.cloud1, .cloud2, .cloud3, .cloud4'); 

//add Howl with stop at the end of fade
const chisle = new Howl({
    src: ['http://www.freesfx.co.uk/rx2/mp3s/2/14070_1459886694.mp3'],
    onfade: function stopSound() {
        chisle.stop();
    },
  });

//Shake function
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

//hide the clouds

$clouds.hide();

//numeral conversion algorithm
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
  
//Jquery animation and enter key function
  $ ( '#romanize' ).click(function(){
    chisle.play();
    $( '#output' ).empty();
    $( '#output' ).append(toRoman($('#input-number').val()));
    $clouds.show().shake().fadeOut();
    $( '#input-number' ).val("")
    chisle.fade(1.0, 0.0, 2000);
    
  });
  
  $('#input-number').keyup(function(event){
    if (event.keyCode == 13) {
      $('#romanize').click();
    }
  });
});