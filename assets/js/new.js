function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
            'google_translate_element'
        );
      }

var icon = document.getElementById('icon');
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
    icon.src =" images/sun.png";
    }else{
    icon.src = "images/moon.png";
    }
}
function myFunction() {
  // var element = document.getElementById("myDIV");
  // element.classList.toggle("mystyle");
  alert("You will we notified on your entered email.");
    }

let hamburgerbtn = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");
    hamburgerbtn.addEventListener("click", () => {
    hamburgerbtn.classList.toggle("active");
    nav_list.classList.toggle("active");
    });