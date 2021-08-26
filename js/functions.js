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

  }  
  
  function loadDataScripts() {
    DataScripts.googleAnalytics(); 
  }

  DataScripts = {
      googleAnalytics: function() {
        var imported = document.createElement('script');
        imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-119233315-1';
        document.head.appendChild(imported);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-119233315-1');
      }
  }

}


