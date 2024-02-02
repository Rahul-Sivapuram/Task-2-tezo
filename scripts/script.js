function FilterSection(){
    const open = document.querySelector(".filter-option");
    if(open.style.display == "none"){
        open.style.display = "flex";
    }
    else{
        open.style.display = "none";
    }
}
function ShowSidebar(){
    const sd = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu");
    const hd = document.querySelector(".navbar");
    const hs = document.querySelector(".header-searchbar");
    sd.style.display = "flex";
    menu.style.display = "none";
    hd.style.marginLeft="12rem";
    hs.style.marginLeft="1rem";
}
function HideSidebar(){
    const sd = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu");
    const navbar=document.querySelector(".navbar");
    const hd = document.querySelector(".header-searchbar");
    sd.style.display = "none";
    menu.style.display="block";
    hd.style.marginLeft="-1rem";
    navbar.style.marginLeft="1rem"
}
function HideSidebar2(){
    const sd = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu");
    const navbar=document.querySelector(".navbar");
    const hd = document.querySelector(".header-searchbar");
    sd.style.display = "none";
    menu.style.display="block";
    hd.style.marginLeft="10rem";
    navbar.style.marginLeft="1rem"
}
function HideSidebar3(){
    const sd = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu");
    const navbar=document.querySelector(".navbar");
    const hd = document.querySelector(".header-searchbar");
    sd.style.display = "none";
    menu.style.display="block";
    hd.style.marginLeft="10rem";
    navbar.style.marginLeft="1rem"
}
document.querySelector(".arrow-item").addEventListener("click",function(){
    window.location.href = "index2.html";
});
document.getElementById("screen3-emp").addEventListener("click",function(){
    window.location.href = "index.html";
});