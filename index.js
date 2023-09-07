
const li1 = document.querySelector(".li1")
const li2 = document.querySelector(".li2")
const li3 = document.querySelector(".li3")
const li4 = document.querySelector(".li4")
const li5 = document.querySelector(".li5")


const section1 = document.querySelector(".over");
const section2 = document.querySelector(".features");
const section3 = document.querySelector(".technology");
const section4 = document.querySelector(".contacts");
const head = document.querySelector(".headNav")
const header = document.querySelector("header")

const scrollToSection = (section) => {
    const chart = section.getBoundingClientRect();
    console.log(chart);
    window.scrollTo({
        left: chart.left,
        top: chart.top + window.scrollY - head.getBoundingClientRect().height,
        behavior: "smooth"
    })
}

li1.addEventListener("click", () => {
    const chart = section1.getBoundingClientRect();
    window.scrollTo({
        left: chart.left,
        top: chart.top + window.scrollY,
        behavior: "smooth",
    });
})

li2.addEventListener("click", () => { scrollToSection(section2) })

li3.addEventListener("click", () => { scrollToSection(section3) })

li4.addEventListener("click", () => { scrollToSection(section4) })

li5.addEventListener("click", () => { scrollToSection(header) })


const navFixed = function (entries) {
    const [entry] = entries
    if (entry.isIntersecting) {
        head.classList.add("fixed")
    }

}

const options = {
    root: null,  // viewport kuzatadi
    threshold: 0.2
}


const observer = new IntersectionObserver(navFixed, options);
observer.observe(section2)


const navFixed2 = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        head.classList.remove("fixed");
    }

}

const options2 = {
    root: null,  // viewport kuzatadi
    threshold: 0.2
}


const observer2 = new IntersectionObserver(navFixed2, options2);
observer2.observe(section1)



// IntersectionObserver API - kesishuvni kuzatuvchi API


//*****************/ SECTION FEATURES****************
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const dots = document.querySelectorAll(".dot")
const cards = document.querySelectorAll(".card");


(function(){
    dots[0].classList.add("active")
})();

let count = 0;


const carousel = ()=>{
    cards.forEach((card, i)=>{
        card.style.transform = `translateX(${(i-count)*100}%)`
    })
}

const slideDots = ()=>{
    dots.forEach(dot=>{
        dot.classList.remove("active")
    })
    dots[count].classList.add("active")
}

nextBtn.addEventListener("click", ()=>{
    count++;
    if(count === cards.length) count = 0;

   carousel();
   slideDots();

})

prevBtn.addEventListener("click", ()=>{
   count--;
   if(count === -1) count = cards.length - 1;
   carousel();
   slideDots();
})

dots.forEach((dot, i)=>dot.addEventListener("click", ()=>{
    count = i;
    carousel();
    slideDots(); 
}))

//*****************/ SECTION TECHNOLOGY****************
const prvBtn = document.querySelector(".prvBtn");
const nxtBtn = document.querySelector(".nxtBtn");
const dotts = document.querySelectorAll(".dott");
const parts = document.querySelectorAll(".part");

(function(){
    parts[0].classList.add("actives")
})

const carouselForTech = ()=>{
    parts.forEach((part, i)=>{
        part.style.transform = `translateX(${(i-count)*100}%)`
    })
}

const slideDotts = ()=>{
    dotts.forEach(dott=>{
        dott.classList.remove("actives")
    })
    dotts[count].classList.add("actives")
}

nxtBtn.addEventListener("click", ()=>{
    count++;
    if(count === parts.length) count = 0;
    carouselForTech()
    slideDotts()
})
prvBtn.addEventListener("click", ()=>{
    count--;
    if(count === -1) count = parts.length - 1;
    carouselForTech()
    slideDotts()
})

dotts.forEach((dott, i)=>dott.addEventListener("click", ()=>{
    count = i;
    carouselForTech();
    slideDotts(); 
}))
















