// ================typing animation----------------->
var typed = new Typed(".typing",{
    strings:["", "Web Designer", "Web Developer", "Graphic designer", "Java Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
// ================  Aside----------------->
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

// Add click event listeners to each navigation item
navList.forEach((navItem, index) => {
    const a = navItem.querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        
        navList.forEach((item, j) => {
            if (item.querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            item.querySelector("a").classList.remove("active");
        });
        
        this.classList.add("active"); // Corrected line
        showSection(this);
        
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
});

function removeBackSection() {
    allSection.forEach(section => section.classList.remove("back-section"));
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    allSection.forEach(section => section.classList.remove("active"));
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    navList.forEach(navItem => {
        navItem.querySelector("a").classList.remove("active");
    });
    const target = element.getAttribute("href").split("#")[1];
    navList.forEach(navItem => {
        if (target === navItem.querySelector("a").getAttribute("href").split("#")[1]) {
            navItem.querySelector("a").classList.add("active");
        }
    });
}

document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    allSection.forEach(section => section.classList.toggle("open"));
}
