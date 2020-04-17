//Recieves the messsage from the background script 
chrome.runtime.onMessage.addListener(gotMessage);

//Function which controls what we do with that message 
function gotMessage(message){

    console.log(message);

}