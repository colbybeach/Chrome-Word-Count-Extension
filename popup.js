window.onload = function(){
chrome.runtime.sendMessage({popupOpen: true},response =>{
  document.getElementById('numberReturn').innerHTML = response;
});
}
