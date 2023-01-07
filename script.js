let header = document.getElementById("header");
let navbar = document.getElementById("navbar");
let toggle_btn = document.getElementById("toggle_btn");
window.addEventListener("scroll",function(e){
    if(window.scrollY > 30){ header.classList.add("active") }else{ header.classList.remove("active") }
});
function togglenav(){
    navbar.classList.toggle("active");
}
toggle_btn.addEventListener("click",togglenav);
if(window.innerWidth < 900){
    navbar.children[0].addEventListener("click",togglenav);
}
//toggle portfolio description
let toggle_desc = document.querySelectorAll(".toggle_desc");
toggle_desc.forEach(function(elem){
    elem.addEventListener("click",function(){
        elem.nextElementSibling.classList.toggle("active");
        elem.children[0].classList.toggle("fa-plus");
        elem.children[0].classList.toggle("fa-minus");
    })
});
//toggle faq accordion
let accordions = document.querySelectorAll(".faq-box .fa-solid");
accordions.forEach(function(elem){
    elem.addEventListener("click",function(){
        elem.parentElement.nextElementSibling.classList.toggle("active");
        elem.classList.toggle("fa-plus");
        elem.classList.toggle("fa-minus");
    })
});