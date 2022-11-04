 let button = document.querySelector(".button")
 let body = document.querySelector('body')

 let darkIcon = document.querySelector('.button.dark')  
 
 button.addEventListener("click",darkmode)

 function darkmode() {
    body.classList.toggle('darkmode')

   let isDarkmode = body.classList.contains("darkmode")

 if (isDarkmode) {
    darkIcon.style.marginTop = '-100%'
 }

  else { 
    darkIcon.style.marginTop = '0px'
  }






 }





