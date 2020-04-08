
  chrome.browserAction.onClicked.addListener(function(tab) {

      chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
         sendServiceRequest(response.data);
      });

  });

  //Handling the request 
  function sendServiceRequest(selectedText) {

      alert(selectedText);


  }
