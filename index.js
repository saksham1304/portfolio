'use strict'

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

const toggleBtn = document.getElementById('toggle');
const sideBar = document.querySelector('aside');
const navLink = document.querySelectorAll('.navbar li');
toggleBtn.addEventListener('click', () =>{
  toggleBtn.classList.toggle('on');
  sideBar.classList.toggle('show')
})
navLink.forEach(function(nav){
  nav.addEventListener('click', function(){
    toggleBtn.classList.remove('on');
    sideBar.classList.remove('show')
  })
})

// FADEIN/FADEOUT
let elementsArray = document.querySelectorAll(".section_wrapper");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();