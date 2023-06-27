
//initiate
$(".search-text").on("click", () => { gsap.to(".default-message", { autoAlpha: 0 }); gsap.to(".book-wrap", { autoAlpha: 1 }); });
//when button clicked
$(".search-icon").on("click", () => { ajaxFuc(); });
//when input text entered
$(".search-text").on("change", () => { ajaxFuc(); });

//confetti to write 
$('.write').on('click', function(){
  // console.log('test');
  // setTimeout(()=>{gsap.to('.home .overlay', {autoAlpha: 1})},1000)
  confetti()
  showModal()
   /** confettiparty()
  //Uncaught SyntaxError: Cannot use import statement outside a module
  //https://ko.javascript.info/import-export
  */
}) 

function confetti(){
  return new Promise((resolve,reject)=>{
      //here our function should be implemented 
      // setTimeout(()=>{
      //     console.log("Hello from inside the testAsync function");
      //     resolve();
      // ;} , 1000
      // );
      console.log("Hello from inside the testAsync function");
      resolve();
  });
}

async function showModal(){
  await confetti();
  gsap.to('.home .overlay', {autoAlpha: 1})
}

//false로 변수바꾸고 
/*if( == true){ 
$('.write-total').on('click', () => { gsap.to('.home .overlay', {autoAlpha: 1}) })
}
*/
//close overlay 
// $('.write-total').on('click', () => { gsap.to('.home .overlay', {autoAlpha: 1}) })
$(".review-close").on("click", () => { gsap.to('.overlay', {autoAlpha: 0}) });
$('.submitted-inner').on('click', () => { gsap.to('.listing-view .overlay', {autoAlpha: 1}) })


const tl = gsap.timeline(); 

$(function(){
    tl.fromTo('.soil',{scale:0}, {duration: 0.4, scale: 1})
    growCactus()  //svg opacity조절하고 stage가 1에서 부터 시작하도록 
});

//grow cactus on each review 
$('.cactus-title').on('click', () => {
    growCactus()
})

//functions 
function ajaxFuc() {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
      query: $(".search-text").val(),
    },
    headers: {
      Authorization: "KakaoAK a2fc33d47a3d0872dc0a94f9853b4954",
    },
  }).done(function (msg) {
    console.log(msg);
    if (msg.documents[0] == undefined) {
      console.log("undefined!!!");
      alert("검색결과가 없습니다.");
      $(".search-text").val("");
    }
    if (msg.documents[0] !== undefined) {
      //새로운 창이라는 모션 효과 - 컨테이너가 1초간 없어졌따가 밑에서 나타나던지?
      //컨테이너가 아니라 ul book-info가 나타나는거 그리고 서치리절트도 모션따로넣고
      gsap.fromTo(".book-info", 3, { autoAlpha: 0 }, { autoAlpha: 1 });
      gsap.fromTo(
        ".book-result",
        3,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, ease: "sine.inOut" }
      );
      $(".book-result").html("Search Result..."); //text motion!! comes up from bottom
      $(".book-title").html(msg.documents[0].title);
      $(".book-thumb").attr("src", msg.documents[0].thumbnail);
      $(".book-author").html(msg.documents[0].authors);
      $(".book-desc").html(msg.documents[0].contents);
      $(".search-text").val("");
    }
  });
}

function growCactus(){
    let stage = $('svg').data('stage');
    if(stage < 11){
        cactusTimeline(stage);
        $('svg').data('stage', stage + 1)
        console.log(stage)
    }
}

function cactusTimeline(item){
    tl.to('svg', {duration: 0.3, opacity: 1, }, "grow-1")
    tl.fromTo('.grow-1 > g', {scale: 0, opacity: 0, transformOrigin: "bottom center"}, {duration: 0.35, scale: 1, opacity: 1, stagger: 0.04 }, "grow-2" )
    tl.fromTo( "#cactus-bulb-1", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.55, scale: 0.3, opacity: 1 }, "grow-2" );
    tl.fromTo( ".grow-2 > g", { scale: 0, opacity: 0, transformOrigin: "top center" }, { duration: 0.44, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-3" );
    tl.to( "#cactus-bulb-1", { duration: 0.4, scale: 0.6, opacity: 1,  }, "grow-3" );
    tl.fromTo( ".grow-3 > g", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.3, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-4" );
    tl.to( "#cactus-bulb-1", { duration: 0.3, scale: 1, opacity: 1,  }, "grow-4" );
    tl.fromTo( ".grow-4 > g", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.4, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-5" );
    tl.fromTo( "#long-cactus-1", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.4, scale: 0.3, opacity: 1,  }, "grow-5" );
    tl.to( "#long-cactus-1", { duration: 0.5, scale: 0.6, opacity: 1,  }, "grow-6" );
    tl.fromTo( ".grow-5 > g", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.5, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-6" );
    tl.to( "#long-cactus-1", { duration: 0.45, scale: 1, opacity: 1,  }, "grow-7" );
    tl.fromTo( ".grow-6 > g", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.4, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-7" );
    tl.fromTo( "#cactus-bulb-2", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.4, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-7" );
    tl.fromTo( ".grow-7 > g", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.3, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-8" );
    tl.fromTo( "#long-cactus-2", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.4, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-8" );
    tl.fromTo( "#long-cactus-3", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.3, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-9" );
    tl.fromTo( "#cactus-bulb-3", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.4, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-9" );
    tl.fromTo( ".grow-8 > g", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.5, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-10" );
    tl.fromTo( "#long-cactus-4", { scale: 0, opacity: 0, transformOrigin: "bottom center" }, { duration: 0.5, scale: 1, opacity: 1, stagger: 0.04,  }, "grow-10" );

    //초기 stage 값 1 = grow-1 인자값 들어간 모션만 작동, 클릭 시 +1 되니까 그 다음 타임라인이 실행 
    tl.tweenFromTo("grow-" + item, "grow-" + (item + 1));
}




