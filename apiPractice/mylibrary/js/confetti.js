export function confettiparty(){
  const wrapper = document.querySelector(".open-modal-btn");
  const writeBtn = document.querySelector(".write");
  const isAnimationOk = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  ).matches; 
  const emoji = ["📕", "📗", "📘", "📙", "📒", "📜", "📝"];
  const numberOfEmoji = 7;
  let elements = [];
  let isClicked = false;
  // writeBtn.addEventListener('click', ()=>{
  //     if(isClicked == false){
  //         splashEmoji();
  //     }
  //     isClicked = true; //한번 이상 클릭하면 작동x 
  //     console.log('test')
  // })
  
  function splashEmoji() {
    for (let i = 0; i < numberOfEmoji; i++) {
      createIcon();
      
    }
    gsap.set(elements, {
      transformOrigin: "50% 50%",
      scale: 0,
    });
  
    function createIcon(icon){
      if(icon === null || icon === undefined){
          icon = document.createElement('span')
          icon.classList.add('item');
          wrapper.appendChild(icon)
          elements.push(icon);
      }
  
      icon.innerText = gsap.utils.random(emoji);
      if(isAnimationOk) animateIcon(icon)
    }
  
    function animateIcon(icon){
      let durationFall = gsap.utils.random(1.75, 2.5); 
      let durationFade = .3;
      let delay = gsap.utils.random(0, 0.75);
      let xDirection = 1;
      let tl =  new gsap.timeline(); 
      tl.to(icon, { delay: delay, keyframes: [{ scale: 1, duration: .1, }, { y: (gsap.utils.random(-50, 50)), ease: Back.easeOut.config(5), duration: durationFall }, { x: (gsap.utils.random(-150, 250)) * xDirection, ease: "Power1.easeOut", duration: durationFall, delay: -durationFall }, { opacity: 0, scale: 3, ease: "Power1.easeOut", duration: durationFade, delay: -durationFade }] }, "<");
  
    }
  }
  return  splashEmoji();

}
