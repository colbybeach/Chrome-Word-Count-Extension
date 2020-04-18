chrome.runtime.sendMessage({popupOpen: true},response =>{
  alert(response);
});

