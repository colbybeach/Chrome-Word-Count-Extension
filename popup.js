chrome.tabs.executeScript({code: "window.getSelection().toString();"}, selection => {


  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;

    if(url.includes("https://docs.google.com/document/")){
      document.getElementById("numbersReturn").innerHTML = "This extension does not work with Google Docs";

    }else if(url.includes(".pdf")){

      document.getElementById("numbersReturn").innerHTML = "This extension does not work with PDF Files";

    }else {
          countWords(selection[0]);
  }
});
  
});  

  function countWords(x){
    let str, strNoSpaces, strSplit, wordCount, charCount, msg;

    str = x;
    strNoSpaces = str.replace(/  +/g, ' ');
    strSplit = strNoSpaces.split(" ");
    wordCount = strSplit.length;
    if(strSplit[0] == ""){
      wordCount --;
    }
    
    
    //Getting the amount of characters minus spaces
    charCount = str.replace(/  +/g, '').length;
    msg = "There are " + wordCount + " words and " + charCount + " characters!"; 

    document.getElementById("numbersReturn").innerHTML = msg;
  }



