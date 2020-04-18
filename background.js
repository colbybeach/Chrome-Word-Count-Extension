var msg;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message.popupOpen) {
      buttonClicked();
      sendResponse('hey');
    }
});


function buttonClicked(){

    //Declaring variables 
  
    //Telling chrome to execute this script, calls function wordCounter 
    chrome.tabs.executeScript({code:"window.getSelection().toString();"}, results =>{
        let str, strNoSpaces, strSplit, wordCount, charCount;

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

        }
      );
      console.log(msg);
    }



