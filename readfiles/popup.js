document.addEventListener('DOMContentLoaded', function() {
    
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var title = tab.title;
         
        const t=document.getElementById('title')
        t.innerText =` Current Tab Title  = ${title}`;
        t.style.color="red",
        t.style.fontFamily="Roboto"
        t.style.fontSize="30px"
      });
    });
  