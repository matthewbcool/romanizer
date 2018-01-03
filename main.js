$( document ).ready(function() {
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
  });
  
  $('#input-number').keyup(function(event){
    if (event.keyCode == 13) {
      $('#romanize').click();
    }
  });
});