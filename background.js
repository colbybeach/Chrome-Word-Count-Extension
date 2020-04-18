chrome.runtime.onMessage.addListener(function(message){
    if(message.popupOpen) {
      buttonClicked();
    }  
});


var str, strNoSpaces, strSplit, wordCount, charCount, msg;

function buttonClicked(tab){

    //Declaring variables 
  
    //Telling chrome to execute this script, calls function wordCounter 
    chrome.tabs.executeScript({code:"window.getSelection().toString();"},
  
    function wordCounter(results){
       
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
          console.log(msg);
        
          //Sending a message to the content script
          //chrome.tabs.sendMessage(tab.id, msg);
   
        }
      );
    }



//chrome.browserAction.onClicked.addListener(buttonClicked)

