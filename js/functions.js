window.onload = function() {
  
  if(!localStorage.getItem('choiceCookieUser')) {

    var cookiesBox = document.querySelector(".cookies");
    cookiesBox.classList.remove("hide");

    var userOptions = document.querySelectorAll(".button-cookie-choice");
    for(i=0; i < userOptions.length; i++) {
      userOptions[i].addEventListener('click', function(){
        var choice = this.dataset.choice;
        switch (choice) {
          case "N":
            localStorage.setItem('choiceCookieUser', "Denied");
            break;
          case "S":
            localStorage.setItem('choiceCookieUser', "Allowed");
            loadDataScripts();
            break;
        }
        cookiesBox.classList.add("hide");
      });
    }

  } else {
    if(localStorage.getItem('choiceCookieUser') == "Allowed") {
      loadDataScripts();
    }
  } 
  
  function loadDataScripts() {
    DataScripts.googleAnalytics(); 
  }

  DataScripts = {
      googleAnalytics: function() {
        gtag('consent', 'update', {
          'ad_storage': 'granted'
        });
      }
  }

}


