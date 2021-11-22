var phmenumobile = document.getElementById('ph-menu-mobile');
var menucontent = document.getElementById('menu-content');
var close = document.getElementById('close');

phmenumobile.onclick = function(){
    menucontent.style.width = '100%';
}

close.onclick = function(){
    menucontent.style.width = '0%';
}