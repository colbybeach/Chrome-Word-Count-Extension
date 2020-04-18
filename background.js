var str, strNoSpaces, strSplit, wordCount, charCount, msg;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    
  if(message.popupOpen) {
      sendResponse(buttonClicked());
    }
});


function buttonClicked(){

  
    //Telling chrome to execute this script, calls function wordCounter 
    chrome.tabs.executeScript({code:"window.getSelection().toString();"}, results =>{

         str = results.toString();
         strNoSpaces = str.replace(/  +/g, ' ');
         strSplit = strNoSpaces.split(" ");
         wordCount = strSplit.length;
          if(strSplit[0] == ""){
            wordCount --;
          }
         
          //Getting the amount of characters minus spaces
          charCount = str.replace(/  +/g, '').length;
  
        }
      );
      
      msg = "There are " + wordCount + " words and " + charCount + " characters (without spaces)!"; 
      return msg ;

    }



