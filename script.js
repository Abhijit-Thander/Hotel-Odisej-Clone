function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function pageAnimation() {
  let tl = gsap.timeline();

  tl.from("header .img-box", {
    height: 300,
    width: "40vw",
    duration: 2,
    ease: "power2.inOut",
  });

  tl.from("header .u-icon", {
    y: -0,
    opacity: 0,
    duration: 1.5,
    //   ease: "power2.inOut",
  });
  tl.from("nav img,button", {
    y: -10,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
  });
}

function textAnimation() {
  // let Allh1 = document.querySelectorAll("#page1 .h1-box h1").textContent;
  // let splitedText = h1.split("");
  // let clutter = "";
  // splitedText.forEach(function (e) {
  //   clutter += `<span>${e}</span>`;
  // });
  // document.querySelector("#page1 .h1-box h1").innerHTML = clutter;

  let Allh1 = document.querySelectorAll("#page1 .h1-box h1");
  Allh1.forEach(function (elem) {
    let clutter = "";
    let H1text = elem.textContent;
    let splitedText = H1text.split("");
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });

  gsap.to("#page1 .h1-box h1 span", {
    color: "#E3E3C4",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page1 h1",
      scroller: "main",
      // markers: true,
      start: "top 60%",
      end: "top -10%",
      scrub: 2,
    },
  });
}
function Page2TextAnimation() {
  let Allh1 = document.querySelectorAll("#page2 #page2-content .h1-heading h1");
  Allh1.forEach(function (elem) {
    let clutter = "";
    let H1text = elem.textContent;
    let splitedText = H1text.split("");
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
  gsap.to("#page2 #page2-content .h1-heading h1 span", {
    color: "#434B34",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2 #page2-content .h1-heading h1",
      scroller: "main",
      // markers: true,
      start: "top 90%",
      end: "top 20%",
      scrub: 0.1,
    },
  });
}

function page2ImgAnimation() {
  gsap.from("#page2 .img-content p, h3, .anime", {
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2 .img-content  ",
      scroller: "main",
      // markers: true,
      start: "top 85%",
      end: "top 40%",
      scrub: 3,
    },
  });
}

function page4Anim() {
  gsap.from("#page4-content", {
    scale: 0,
    duration: 4,
    scrollTrigger: {
      trigger: "#page4-content",
      scroller: "main",
      // markers: true,
      start: "top 120%",
      end: "top 70%",
      scrub: 1,
      // ease: "power3.inOut",
    },
  });
}

function page5textAnimation() {
  let Allh1 = document.querySelectorAll("#page5 .header .h-top h1");
  Allh1.forEach(function (elem) {
    let clutter = "";
    let H1text = elem.textContent;
    let splitedText = H1text.split("");
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });

  gsap.to("#page5 .header .h-top h1 span", {
    color: "#E3E3C4",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page5 h1",
      scroller: "main",
      // markers: true,
      start: "top 90%",
      end: "top 70%",
      scrub: 2,
    },
  });

  gsap.from("#page5 .hotels .hotel-list", {
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page5 .box",
      scroller: "main",
      // markers: true,
      start: "top 80%",
      end: "top 50%",
      scrub: 3,
    },
  });
  gsap.from("#page5 .header .h-btm h6", {
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page5 .header .h-btm ",
      scroller: "main",
      // markers: true,
      start: "top 90%",
      end: "top 80%",
      scrub: 1,
    },
  });
}

function page6textAnimation() {
  let Allh1 = document.querySelectorAll("#page6 h1");
  Allh1.forEach(function (elem) {
    let clutter = "";
    let H1text = elem.textContent;
    let splitedText = H1text.split("");
    splitedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });

  gsap.to("#page6  h1 span", {
    color: "#434B34",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page6 h1",
      scroller: "main",
      // markers: true,
      start: "top 75%",
      end: "top 0%",
      scrub: 2,
    },
  });
}
function page10Animation() {
  gsap.from("#page10 .header h1,h6   ", {
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
      trigger: "#page10 .header ",
      scroller: "main",
      // markers: true,
      start: "top 90%",
      end: "top 70%",
      scrub: 3,
    },
  });

  gsap.from("#page10 .content .left", {
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page10 .content ",
      scroller: "main",
      // markers: true,
      start: "top 90%",
      end: "top 30%",
      scrub: 1,
    },
  });
}

locomotiveScroll();
pageAnimation();
textAnimation();
Page2TextAnimation();
page2ImgAnimation();
page4Anim();
page5textAnimation();
page6textAnimation();
page10Animation();
