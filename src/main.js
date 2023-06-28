//  new style for navbar

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// faq show/hide
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        // icon changes
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})

// Menu Show/hide
const menu = document.querySelector(".nav-menu");
const menuClose = document.querySelector(".navMenu_Ul")
const menuBtn = document.querySelector("#open-menu-btn");
const menuCloseBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () =>{
    menu.style.display = "flex";
    menuCloseBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close
const closeNav = () => {
    menuClose.style.display = "flex";
    menuCloseBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

menuCloseBtn.addEventListener("click", closeNav)