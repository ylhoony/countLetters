function countLetters(inputWords) {

  var noSpaces = inputWords.split(" ").join("");
  var letterObj = {};

  console.log(noSpaces[1]);

  for (i = 0; i < noSpaces.length; i++) {

    var charLoop = noSpaces.charAt(i);

    if (letterObj.hasOwnProperty(charLoop)) {
      letterObj[charLoop].push(i);
    } else {
      letterObj[charLoop] = [i];
    }


  }
  console.log(letterObj);
}

countLetters("lighthouse in the house");
