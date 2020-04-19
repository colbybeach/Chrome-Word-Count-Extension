//Looking for if the button is clicked to count text manually 
document.addEventListener('DOMContentLoaded', function() {
  
  let checkPageButton = document.getElementById('subButton'); //Getting HTML button

  checkPageButton.addEventListener('click', function countWordsFunc() {
    let userInput = document.getElementById('txtField').value;  //Getting the value of text Field
    countWords(userInput);                     //Putting the text field value through the countWords function
  });
});




//Checking for highlighted text 
chrome.tabs.executeScript({code: 'window.getSelection().toString();'}, selection => {


  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;  //Gets users URL

    //Tests to see if the URL is in Google Docs 
    if(url.includes('https://docs.google.com/document/')){
      document.getElementById('numbersReturn').innerHTML = 'This extension does not work with Google Docs.';

    //Tests to see if the URL a PDF 
    }else if(url.includes('.pdf')){

      document.getElementById('numbersReturn').innerHTML = 'This extension does not work with PDF Files.';

    //Counts highlighted words 
    }else {
          countWords(selection[0]);
    }
  });
  
});  


 /**Count words function count amount of words in a string
  * param x == String that will be counted 
  * Returns nothing, rather changes the HTML to number 
  */

  function countWords(x){

    let strNoSpaces, strSplit, wordCount, charCount, msg;

    //Getting the number of words 
    strNoSpaces = x.replace(/  +/g, ' '); //Replaces all double spaces with single space
    strSplit = strNoSpaces.split(' ');    //Splits string into an array without spaces
    wordCount = strSplit.length;          //Counts the array 

    if(strSplit[0] == ''){                //Subtracts one so if no text is inputted the count is still '0'
      wordCount --;
    }
    
    
    //Getting the amount of characters minus spaces
    charCount = x.replace(/  +/g, '').length;


    msg = 'There are ' + wordCount + ' words and ' + charCount + ' characters!'; 

    document.getElementById('numbersReturn').innerHTML = msg; //Changes HTML
  }


