
//Adding an event listener
document.addEventListener('DOMContentLoaded', function() {

var checkPageButton, str, strNoSpaces, strSplit, wordCount, charCount;
//Getting the button element into a variable
   checkPageButton = document.getElementById('countWords');

  //Adding a click action the button which will iniate a function
  checkPageButton.addEventListener('click', function() {

    //Putting the userinput into a variable
     str = document.getElementById('textField').value;
     charCount = str.length;


    //Deleting any double spaces
     strNoSpaces = str.replace(/  +/g, ' ');

    //Splitting the user input into an array
     strSplit = strNoSpaces.split(" ");
     wordCount = strSplit.length;

     //If the user inputs no text word count will remain at 0
      if(strSplit[0] == ""){
        wordCount --;
      }

    //Displaying the length of the array made which = word count
    document.getElementById("numberReturn").innerHTML = "There are "
    + wordCount + " words";

    //Displaying the length of the first string made which = char count
    document.getElementById("lettersReturn").innerHTML = "and "
    + charCount + " characters!";


},false);
},false);
