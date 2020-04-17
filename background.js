//Setting up a listener
chrome.browserAction.onClicked.addListener(buttonClicked)

//Function for when the onClicked is called
function buttonClicked(tab){

  //Declaring variables 
  var str, strNoSpaces, strSplit, wordCount, charCount, msg;

  //Telling chrome to execute this script, calls function wordCounter 
  chrome.tabs.executeScript({code:"window.getSelection().toString();"},

    function wordCounter(results){

      //Getting the results to a string and putting it into an array, where it is then counted
      //into the wordCount variable 
       str = results.toString();
       strNoSpaces = str.replace(/  +/g, ' ');
       strSplit = strNoSpaces.split(" ");
       wordCount = strSplit.length;
        if(strSplit[0] == ""){
          wordCount --;
        }

        //Getting the amount of characters minus spaces
        charCount = str.replace(/  +/g, '').length;

        //Declaring the message variable 
        msg = "There are " + wordCount + " words and " + charCount + " characters (without spaces)!";
        
        //Sending a message to the content script 
        chrome.tabs.sendMessage(tab.id, msg);

      }
    );

}


