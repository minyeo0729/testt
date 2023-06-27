
const wrapper = document.querySelector(".write-emoji");
const writeBtn = document.querySelector(".write-btn-wrap");
const emoji = ["📕", "📗", "📘", "📙", "📒", "📜", "📝"];

writeBtn.addEventListener("click", () => {
  splashEmoji();
});

//iterator
function splashEmoji() {
  for (let i = 0; i < emoji.length; i++) {
    createIcon();
  }

  //create book emojis, add motion
  function createIcon(icon) {
    if (icon === null || icon === undefined) {
      icon = document.createElement("span");
      icon.classList.add("item");
      wrapper.appendChild(icon);
    }

    icon.innerText = gsap.utils.random(emoji);
    animateIcon(icon);
  }

  //emoji splashing motion 
  function animateIcon(icon) {
    let delay = gsap.utils.random(0, 0.75);
    let tl = gsap.timeline();
    gsap.set(icon, { scale: 0, transformOrigin: "center" });
    tl.to(icon,{
        delay: delay,
        ease: "Power1.easeOut",
        keyframes: [
          { scale: 1 },
          {
            x: "random([-70, -50, -100, 100, 50, 70])",
            y: "random([-70, -50, -100, 100, 50, 70])",
            stagger: { amount: 0.1, },
          },
          { opacity: 0, scale: 2 },
        ],
      }, "<" );
  }
}
