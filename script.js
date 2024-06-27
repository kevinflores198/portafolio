const toggle = document.getElementById('boton');
const body = document.querySelector('body');
const burger = document.querySelector('#buton-burger');
const menu_options = document.querySelector('#menu-options');

burger.addEventListener('click', function(){
    menu_options.classList.toggle('aside-active');
});

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}

window.addEventListener("scroll", () =>{
    const scroll = document.documentElement.scrollTop;
    if (scroll > 100) {
        arrowUp.style.right = 20 + "px";
    }else{
        arrowUp.style.right = -100 + "px";
    }
})