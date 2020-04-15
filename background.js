//Setting up a listener
chrome.browserAction.onClicked.addListener(buttonClicked);

//Function for when the onClicked is called
function buttonClicked(){


  var str, strNoSpaces, strSplit, wordCount, numbersReturn, charCount;

  //Testing if it is a doc or pdf file


  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      let url = tabs[0].url;
      if(url.includes("https://docs.google.com/document")){
        alert("This Extension Does Not Work in Google Docs");
      }else if(url.includes(".pdf")){
        alert("This Extension Does Not Work in PDF Files");s
      }
      else{


        /*If it is not in Docs or a PDF, Calucate Words*/

        chrome.tabs.executeScript({code:"window.getSelection().toString();"}, results =>{

             str = results.toString();

             strNoSpaces = str.replace(/  +/g, ' ');

             strSplit = strNoSpaces.split(" ");
             wordCount = strSplit.length;

              if(strSplit[0] == ""){
                wordCount --;
              }

              charCount = str.replace(/  +/g, '').length;

              numbersReturn = ("There are " + wordCount + " words and " + charCount + " characters (without spaces)!");

              alert(numbersReturn);
            }
          );
        }
      });
}
