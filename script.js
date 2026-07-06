/* ==========================================
   DOM Ready
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initCounter();

    initStickyNavbar();

    initFAQ();

    initReveal();

    initSmoothScroll();

    initActiveLinks();

    initMobileMenu();

    createProgressBar();

});

/* ==========================================
   STICKY NAVBAR
========================================== */

function initStickyNavbar(){

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.background="rgba(255,255,255,.9)";
header.style.backdropFilter="blur(25px)";
header.style.boxShadow="0 10px 35px rgba(0,0,0,.08)";

}else{

header.style.background="rgba(255,255,255,.45)";
header.style.boxShadow="none";

}

});

}

/* ==========================================
   COUNTER
========================================== */

function initCounter(){

const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/150;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target.toLocaleString()+"+";

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));

}

/* ==========================================
   FAQ
========================================== */

function initFAQ(){

const items=document.querySelectorAll(".faq-item");

items.forEach(item=>{

item.querySelector(".faq-question").onclick=()=>{

item.classList.toggle("active");

};

});

}

/* ==========================================
   REVEAL
========================================== */

function initReveal(){

const elements=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

elements.forEach(section=>{

section.style.opacity=0;
section.style.transform="translateY(70px)";
section.style.transition=".8s";

observer.observe(section);

});

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

function initSmoothScroll(){

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

}

/* ==========================================
   ACTIVE MENU
========================================== */

function initActiveLinks(){

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(scrollY>=top){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

}

/* ==========================================
   MOBILE MENU
========================================== */

function initMobileMenu(){

const menu=document.querySelector(".menu");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("show");

};

}

/* ==========================================
   PROGRESS BAR
========================================== */

function createProgressBar(){

const bar=document.createElement("div");

bar.id="progressBar";

document.body.appendChild(bar);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.scrollY/total)*100;

bar.style.width=progress+"%";

});

}
/* ==========================================
   DARK MODE
========================================== */

const darkBtn = document.querySelector(".fa-moon");

if (darkBtn) {

    darkBtn.parentElement.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            darkBtn.classList.remove("fa-moon");
            darkBtn.classList.add("fa-sun");

        } else {

            darkBtn.classList.remove("fa-sun");
            darkBtn.classList.add("fa-moon");

        }

    });

}

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.opacity = "1";
        topBtn.style.visibility = "visible";

    } else {

        topBtn.style.opacity = "0";
        topBtn.style.visibility = "hidden";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

if (galleryImages.length > 0) {

    const overlay = document.createElement("div");

    overlay.id = "lightbox";

    overlay.innerHTML = "<img>";

    document.body.appendChild(overlay);

    const lightImg = overlay.querySelector("img");

    galleryImages.forEach(img => {

        img.onclick = () => {

            overlay.classList.add("show");

            lightImg.src = img.src;

        };

    });

    overlay.onclick = () => {

        overlay.classList.remove("show");

    };

}

/* ==========================================
   LOADING SCREEN
========================================== */

const loader = document.createElement("div");

loader.id = "loader";

loader.innerHTML = `

<div class="loader-circle"></div>

<h2>Loading Medicare+</h2>

`;

document.body.appendChild(loader);

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 700);

    }, 1200);

});

/* ==========================================
   RIPPLE BUTTON EFFECT
========================================== */

document.querySelectorAll("button,a").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        ripple.style.left = e.offsetX + "px";

        ripple.style.top = e.offsetY + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 700);

    });

});

/* ==========================================
   MOUSE SPOTLIGHT
========================================== */

const light = document.createElement("div");

light.id = "spotlight";

document.body.appendChild(light);

window.addEventListener("mousemove", e => {

    light.style.left = e.clientX + "px";

    light.style.top = e.clientY + "px";

});

/* ==========================================
   PARALLAX HERO
========================================== */

const hero = document.querySelector(".hero-right img");

window.addEventListener("mousemove", e => {

    if (!hero) return;

    let x = (window.innerWidth / 2 - e.pageX) / 40;

    let y = (window.innerHeight / 2 - e.pageY) / 40;

    hero.style.transform = `translate(${x}px,${y}px)`;

});

/* ==========================================
   FLOATING CARDS
========================================== */

const cards = document.querySelectorAll(".floating-card");

setInterval(() => {

    cards.forEach(card => {

        card.style.transform = `translateY(${Math.random() * 15}px)`;

    });

}, 2500);

/* ==========================================
   ACTIVE BUTTON ANIMATION
========================================== */

document.querySelectorAll(".primary-btn,.appointment-btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.06)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});
/* ==========================================
   AUTO TESTIMONIAL SLIDER
========================================== */

function testimonialSlider() {

    const slider = document.querySelector(".testimonial-slider");

    if (!slider) return;

    let cards = slider.children;

    let index = 0;

    setInterval(() => {

        index++;

        if (index >= cards.length) {

            index = 0;

        }

        slider.scrollTo({

            left: cards[index].offsetLeft,

            behavior: "smooth"

        });

    }, 4000);

}

testimonialSlider();

/* ==========================================
   APPOINTMENT FORM VALIDATION
========================================== */

const appointmentForm = document.querySelector("#appointment form");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = appointmentForm.querySelectorAll("input,select,textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "2px solid red";

                valid = false;

            } else {

                input.style.border = "1px solid #ddd";

            }

        });

        if (valid) {

            alert("Appointment Booked Successfully!");

            appointmentForm.reset();

        }

    });

}

/* ==========================================
   EMERGENCY BUTTON ANIMATION
========================================== */

const emergencyBtn = document.querySelector(".emergency-btn");

if (emergencyBtn) {

    setInterval(() => {

        emergencyBtn.animate([

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.08)"

            },

            {

                transform: "scale(1)"

            }

        ], {

            duration: 900

        });

    }, 2000);

}

/* ==========================================
   FLOATING WHATSAPP BUTTON
========================================== */

const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/919999999999";

whatsapp.target = "_blank";

whatsapp.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';

whatsapp.id = "whatsappButton";

document.body.appendChild(whatsapp);

/* ==========================================
   FLOATING EMERGENCY BUTTON
========================================== */

const emergencyFloat = document.createElement("a");

emergencyFloat.href = "tel:+911234567890";

emergencyFloat.innerHTML = '<i class="fa-solid fa-phone"></i>';

emergencyFloat.id = "emergencyFloat";

document.body.appendChild(emergencyFloat);

/* ==========================================
   BUTTON MAGNET EFFECT
========================================== */

document.querySelectorAll(".primary-btn,.appointment-btn,.package-btn")
.forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.12}px,${y * 0.12}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0,0)";

    });

});

/* ==========================================
   RANDOM FLOATING BLOBS
========================================== */

const blobs = document.querySelectorAll(".blob");

setInterval(() => {

    blobs.forEach(blob => {

        const x = Math.random() * 40 - 20;

        const y = Math.random() * 40 - 20;

        blob.style.transform =
            `translate(${x}px,${y}px) scale(${1 + Math.random() * .1})`;

    });

}, 5000);

/* ==========================================
   SCROLL ANIMATION FOR CARDS
========================================== */

const animatedCards = document.querySelectorAll(

    ".department-card,.doctor-card,.facility-card,.package-card,.news-card"

);

const cardObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate([

                {

                    opacity: 0,

                    transform: "translateY(70px)"

                },

                {

                    opacity: 1,

                    transform: "translateY(0)"

                }

            ], {

                duration: 900,

                fill: "forwards"

            });

        }

    });

}, {

    threshold: .2

});

animatedCards.forEach(card => {

    cardObserver.observe(card);

});

/* ==========================================
   CURRENT YEAR
========================================== */

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/* ==========================================
   PAGE LOADED
========================================== */

console.log("Premium Hospital Website Loaded Successfully");