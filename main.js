

//NAVIGATE ON CLICK
document.querySelectorAll('nav li').forEach((listitem)=>{
    listitem.addEventListener('click', ()=>{
        console.log("click");
        var topPosition=document.getElementById(listitem.dataset.page).offsetTop-120;
        window.scrollTo({
            top: topPosition,
            left: 0,
            behavior: 'smooth'
        })
    });
})

//FAQS ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}