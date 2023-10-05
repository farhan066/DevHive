const nav = document.querySelector(".nav-links ul")
const navBtn = document.querySelector(".nav-links button")

navBtn.addEventListener("click",()=>{
    nav.classList.toggle("nav-open")
})

///Date 

const year = document.querySelector(".year")

year.innerHTML = new Date().getFullYear()


///scroll
const scrollButton = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollButton.classList.add("show-scroll-top")
  } else {
    scrollButton.classList.remove("show-scroll-top")
  }
});


///blob
const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}




/////////Loader
document.addEventListener("DOMContentLoaded", function () {
  // Find the loader element by its class name
  let loader = document.querySelector(".loaderBox");

      loader.classList.add("hidden");
});

// ---------animation----------
////////
const fromLeft = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
     

    if(entry.isIntersecting){
      entry.target.classList.add("show-from-left")
    }else{
      entry.target.classList.remove("show-from-left")
    }
  })
})

const hiddenLeft = document.querySelectorAll('.from-left');

hiddenLeft.forEach((el)=> fromLeft.observe(el))
//////
const fromRight = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
     

    if(entry.isIntersecting){
      entry.target.classList.add("show-from-right")
    }else{
      entry.target.classList.remove("show-from-right")
    }
  })
})

const hiddenRight = document.querySelectorAll('.from-right');

hiddenRight.forEach((el)=> fromRight.observe(el))

//////////

const slideLeft = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
     

    if(entry.isIntersecting){
      entry.target.classList.add("show-slide-left")
    }else{
      entry.target.classList.remove("show-slide-left")
    }
  })
})

const hiddenSlideLeft = document.querySelectorAll('.slide-left');

hiddenSlideLeft.forEach((el)=> slideLeft.observe(el))

///////////

const slideRight = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
     

    if(entry.isIntersecting){
      entry.target.classList.add("show-slide-right")
    }else{
      entry.target.classList.remove("show-slide-right")
    }
  })
})

const hiddenSlideRight = document.querySelectorAll('.slide-right');

hiddenSlideRight.forEach((el)=> slideRight.observe(el))

