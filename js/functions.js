window.onload = function() {

  // Cookies
  DataScripts = {
    googleAnalytics: function() {
      gtag('consent', 'update', {
        'ad_storage': 'granted'
      });
    }
  }
  
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

  // Automatic Smooth Scroll after click
  let nextSectionButton = document.querySelector(".arrow");
  nextSectionButton.addEventListener("click", function(e){
    downSection(e);
  });

  function downSection(e) {
    e.preventDefault();
    var elementHeight = document.querySelector("main").clientHeight;
    window.scrollTo({
      top: elementHeight,
      behavior: 'smooth'
    });
  }

  // Alter Words
  var secondsPerLoop  = 1.5;
  var i               = 0;
  var targetElement   = document.querySelector(".container-words");
  var repetition      = setInterval(function() {
    alterWords(targetElement, i)}, secondsPerLoop * 1000);

  function alterWords(container) {
    var elements = container.children;    
    for(j = 0 ; j < elements.length; j++) {
      elements[j].classList.remove("fade");
      elements[j].style.display = "none";
    }
    elements[i].classList.add("fade");
    elements[i].style.display = "inline-block";
    if (i == elements.length - 1) {
      i = 0;
    } else {
      i++;
    }  
  }


}
// End window.onload

// Loading
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector(".load").style.visibility = "visible";
  } else {
      document.querySelector(".load").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
  }
};

