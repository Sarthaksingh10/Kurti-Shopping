let readmore=document.querySelector("#readmore")
let linkmore=document.querySelector("#link-for-more") 
let dots=document.getElementById("blank")   

linkmore.addEventListener("click",function(){
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        linkmore.innerHTML = "Readmore"; 
        readmore.style.display = "none";
      } else {
        dots.style.display = "none";
        linkmore.innerHTML = "Readless"; 
        readmore.style.display = "inline";
      }
    
})