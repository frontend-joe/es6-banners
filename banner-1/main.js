gsap.registerPlugin(ScrollTrigger);

// const images = gsap.utils.toArray("img");

gsap.utils.toArray("section").forEach((section, index) => {
  const w = section.querySelector(".images");
  const [x, xEnd] = [w.scrollWidth * -1, 0];
  gsap.fromTo(
    w,
    { x },
    {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 1,
      },
    }
  );
});

// imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
