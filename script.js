gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  lerp: 0.08,
  getDirection: true,
});

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

// --- PAGE 2 ANIMATIONS ---
let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    scroller: ".main",
  },
});

t1.to(
  "#fanta",
  {
    top: "120%",
    left: "0",
  },
  "r1"
);
t1.to(
  "#orange2",
  {
    top: "160%",
    left: "23%",
  },
  "r1"
);
t1.to(
  "#orange",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "r1"
);
t1.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "r1"
);
t1.to(
  "#leaf2",
  {
    top: "110%",
    rotate: "130deg",
    left: "0%",
  },
  "r1"
);

// --- PAGE 3 ANIMATIONS ---
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    scroller: ".main",
  },
});

tl2.from(
  ".lemon1",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
    opacity: 0,
  },
  "ca"
);
tl2.from(
  "#cocacola",
  {
    rotate: "-90deg",
    top: "11%",
    left: "-10%",
  },
  "ca"
);
tl2.from(
  ".lemon2",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca"
);
tl2.from(
  "#pepsi",
  {
    rotate: "90deg",
    top: "110%",
    left: "100%",
  },
  "ca"
);
tl2.to(
  "#orange2",
  {
    width: "18%",
    left: "42%",
    top: "204%",
  },
  "ca"
);
tl2.to(
  "#fanta",
  {
    width: "35%",
    top: "210%",
    left: "33%",
  },
  "ca"
);
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
  scroll.update();
});
ScrollTrigger.addEventListener("refresh", () => scroll.update());
