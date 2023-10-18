var menu=document.querySelector(".menu");
var navlist=document.querySelector(".navlist");
var navbar=document.querySelector(".navbar");

menu.addEventListener("click",function(){
    this.classList.toggle("click");
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle("v-nav");

});

function check(e){
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle("v-nav");
    menu.classList.toggle("click");
}

