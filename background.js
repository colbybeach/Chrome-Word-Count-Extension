//Setting up a listener
chrome.browserAction.onClicked.addListener(buttonClicked);

//Function for when the onClicked is called
function buttonClicked(tab){

  var str, strNoSpaces, strSplit, wordCount, charCount;

  chrome.tabs.executeScript({code:"window.getSelection().toString();"},

    function wordCounter(results){

       str = results.toString();

       strNoSpaces = str.replace(/  +/g, ' ');

       strSplit = strNoSpaces.split(" ");
       wordCount = strSplit.length;

        if(strSplit[0] == ""){
          wordCount --;
        }

        charCount = str.replace(/  +/g, '').length;

        var numbersReturn = ("There are " + wordCount + " words and " + charCount + " characters (without spaces)!");
        alert(numbersReturn);
      }
    );

}
