gsap.to(".slide", 1, { x: "100%", delay: 0.5 });

const mouse = document.querySelector(".cursor");

function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
  let xPosition = e.pageX + "px";
  let yPosition = e.pageY + "px";

  let width = Math.min(window.innerWidth / 10, 150) + "px";
}

function activeCursor(e) {
  const item = e.target;

  if (item.classList.contains("bg1") || item.classList.contains("bg2")) {
    gsap.to(mouse, 0.5, {
      border: "1rem double white",
      padding: "1.5rem",
    });
  } else {
    gsap.to(mouse, 0.5, {
      border: "1rem solid white",
      padding: 0,
    });
  }
}

window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
