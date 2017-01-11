

function countLetters(inputWords) {
  var noSpace = inputWords.split(' ').join();
  var noComma = noSpace.replace(/[,]/g,"");
  var letterObj = {};

  for (i = 0; i < noComma.length; i++) {

    var charCount = 0;
    var charLoop = noComma.charAt(i);

    if (letterObj[charLoop] === undefined) {
       letterObj[charLoop] = 1;
    }
    else {
      letterObj[charLoop] += 1;
    }
  }

 console.log(letterObj);


}

countLetters("lighthouse in the house");