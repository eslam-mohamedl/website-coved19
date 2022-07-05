
  window.addEventListener("scroll", function(){
   const header = document.getElementById("navbar");
   header.classList.toggle('color', window.scrollY > 100);
});

closevar logo = document.getElementById("logo");

   if(window.scrollY > 100){
       
     logo.style.color = "white";  
       
   }

   var close = document.getElementById("close");
   var nav = document.getElementById("nav");
   var icons = document.getElementById("bars");

   close.onclick = function (){

    nav.style.display = "none";
   
   }

   icons.onclick = function(){
     
    nav.style.width = "100%";

   }