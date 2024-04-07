let navLinks = document.querySelectorAll(".nav-link");
let sections = document.querySelectorAll("section");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300 ;
        let height =  sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLinks.forEach(navList => {
                navList.classList.remove("active");
                document.querySelector('.nav-link[href*=' + id + ']').classList.add("active");
            })
        }
    })
}


navLinks.forEach(navList => {
    navList.addEventListener("click",(event)=>{
        document.querySelector(".active")?.classList.remove("active");
        navList.classList.add("active");
    })
});
