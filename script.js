function locomotiveAni(){
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  
    // for tablet smooth
    tablet: { smooth: true },
  
    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  

  setTimeout(() => {
    ScrollTrigger.refresh();
    locoScroll.update();
  }, 1000);
  
  
}




function loadingAnim(){
  
var tl = gsap.timeline()
tl.from("#page1", {
  opacity: 0
})
tl.from("#page1", {
  transform:"scaleX(0.3) scaleY(0.1) translateY(100%)",
  borderRadius:"100",
  duration:1,
  ease: "power2.out",
})
tl.from("nav", {
  opacity: 0
})
tl.from("#page1 h1, #page1 p, #page1 div", {
  opacity:0,
  duration:0.5,
  stagger: 0.2
})

}

function navAnimation(){
  const nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function(){
  let tl = gsap.timeline()
  tl.to("#nav-bottom", {
    height: "10vw",
    duration : 0.1,

  },)
  tl.to(".nav-part2 h5", {
    display: "block"
  })
  tl.to(".nav-part2 h5 span", {
    y : "0",
    stagger: {
      amount: 0.2
    }
  },)
})

nav.addEventListener("mouseleave", function(){
  let tl = gsap.timeline()

  tl.to(".nav-part2 h5 span", {
    y : "25",
    stagger: {
      amount: 0.2
    }
  })
  tl.to(".nav-part2 h5", {
    display: "none"
  })
  tl.to("#nav-bottom", {
    height: "0",
    duration:0.2,
  })

})
}

function page2Ani(){
  const rightElems = document.querySelectorAll(".right-elem")


rightElems.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){

    gsap.to(elem.childNodes[3],{
      opacity: 1,
      scale: 1
    })
  })
  elem.addEventListener("mouseleave", function(){
    gsap.to(elem.childNodes[3],{
      opacity: 0,
      scale: 0
    })
  })
  elem.addEventListener("mousemove", function(dets){
    gsap.to(elem.childNodes[3],{
      x : dets.x - elem.getBoundingClientRect().x - 30 ,
      y : dets.y - elem.getBoundingClientRect().y - 60
    })
  })
})
}

function page3VideoAnimation(){
  const page3Center = document.querySelector(".page3-center"); 
  const video = document.querySelector("#page3 video");
  
  page3Center.addEventListener("click", function(){
    video.play()
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity:1,
      borderRadius:0
    })
  })
  video.addEventListener("click", function(){
    video.pause()
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity:0,
      borderRadius:30
    })
  })
}

function page4Anim(){

  const sections = document.querySelectorAll(".sec-right")

  sections.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
      elem.childNodes[3].style.opacity = 1
      elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function(){
      elem.childNodes[3].style.opacity = 0
      elem.childNodes[3].load()
    })
  })
}

function page6Animations(){
  gsap.from([".btm6-part2 h4", ".btm6-part3 h4", ".btm6-part4 h4"],{
    x : 0,
    duration: 1,
    scrollTrigger:{
      trigger: ".btm6-part2",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 20%",
      scrub:true,
    }
  })
  
}

window.addEventListener("load", () => {
locomotiveAni()
loadingAnim()
navAnimation()
page2Ani()
page3VideoAnimation()
page4Anim()
page6Animations()
})