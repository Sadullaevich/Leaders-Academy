const header = document.querySelector("[data-header]");
const doc = document.documentElement;
header && window.addEventListener("scroll", () => {
    console.log(top.scrollY);
    if(top.scrollY > 140 && !header.classList.contains("white")) {
        header.classList.add("white");
        console.log("Hello");
    }else if(top.scrollY == 0) {
        header.classList.remove("white");
    }
})

const barBtn = document.querySelector('#menu-btn');
const ULBtn = document.querySelector('.ul-nav');
const menuClose = document.querySelector('#menu-close') 

barBtn.addEventListener('click', ()=>{
    ULBtn.classList.toggle('active')
});

menuClose.addEventListener('click', ()=> {
    ULBtn.classList.toggle('active') 
});     
