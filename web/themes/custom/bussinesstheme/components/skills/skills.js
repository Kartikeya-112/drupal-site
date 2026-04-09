document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skills__fill");
  const section = document.querySelector(".skills");

  const animateBars = () => {
    bars.forEach((bar) => {
      const value = bar.getAttribute("data-width");

      
      bar.style.width = "0%";

   
      bar.offsetWidth;

      // animate to value
      setTimeout(() => {
        bar.style.width = value + "%";
      }, 100);
    });
  };

  const resetBars = () => {
    bars.forEach((bar) => {
      bar.style.width = "0%";
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateBars(); // run every time visible
        } else {
          resetBars(); // reset when leaving
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(section);
});