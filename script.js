gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

const themeSwitcher = document.querySelector('input[type=checkbox]');
const darkCircle = document.querySelector('.darkCircle');
const lightCircle = document.querySelector('.lightCircle');
const body = document.querySelector('body');

themeSwitcher.addEventListener('change', () => {
  darkCircle.classList.toggle('grow');
  lightCircle.classList.toggle('grow');
  
  body.classList.toggle('light');
  body.classList.toggle('dark');
});


function navani(){
    gsap.from(".logoright p", {
        x: -600,
        duration: 1
    })
}

function page3ani(x) {
    if (x.matches) { // If media query matches
        gsap.from(".page3 p", {
            opacity: .2,
            color: "var(--text-color)",
            x:100,
            scrollTrigger: {
            trigger: ".page3 p",
            scroller: ".main",
            // markers: true,
            start: "top 60%",
            end: "top 30%",
            scrub: 3,
            }
        })
    } else {
        gsap.from(".page3 p", {
            opacity: .2,
            color: "var(--text-color)",
            x:20,
            scrollTrigger: {
            trigger: ".page3 p",
            scroller: ".main",
            markers: true,
            start: "top 60%",
            end: "top 30%",
            scrub: 3,
            }
        })
    }
  }
function page5ani(){
    gsap.from(".page5right p", {
        opacity: .2,
        color: "var(--text-color)",
        scrollTrigger: {
        trigger: ".page5right p",
        scroller: ".main",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 3,
        }
    })
}

function page4ani(x) {
    if (x.matches) { // If media query matches
        gsap.to("#project2", {
            y:300,
            scrollTrigger: {
            trigger: "#project2",
            scroller: ".main",
            // markers: true,
            start: "top 60%",
            end: "top 30%",
            scrub: 5,
            // duration: 1
            }
        })
    } else {
        gsap.to("#project2", {
            scrollTrigger: {
            trigger: "#project2",
            scroller: ".main",
            markers: true,
            start: "top 60%",
            end: "top 30%",
            scrub: 5,
            // duration: 1
            }
        })
    }
  }
  
  var x = window.matchMedia("(min-width: 480px)")


navani();
page3ani(x);
page4ani(x);
page5ani();