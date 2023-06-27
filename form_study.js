// 커스텀 select
function selectric_init() {
    if (!JT.browser("mobile")) {
        document.querySelectorAll(".jt-selectric").forEach((select) => {
            $(select).selectric({
                disableOnMobile: true,
                arrowButtonMarkup:
                    '<b class="button"><i class="jt-icon"><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.1,11.4L2.3,5.7l1.4-1.4l4.4,4.3l4.2-4.3l1.4,1.4L8.1,11.4z" fill="black"/></svg></i></b>',
                optionsItemBuilder: function (itemData) {
                    return "<span>" + itemData.text + "</span>";
                },
                onInit: function () {
                    document
                        .querySelectorAll("input.selectric-input")
                        .forEach((item) => item.setAttribute("readonly", true));
                },
            });
        });
    }
}
selectric_init();

// TODO
function validation() {

    const data0 = document.getElementById("data[1]");
    const data1 = document.getElementById("data[2]");

 

    //checkbox
    const checkbox = document.querySelectorAll(".jt-checkbox input");
    let checkbox_checked = false;
    function checkboxClick() {
        let checkboxArray = document.querySelectorAll('input[name="data\\[3\\]"]:checked').length;
        if(checkboxArray >= 2){
            checkbox_checked = true;
        }
    }
    checkbox.forEach((item) => {
        item.addEventListener("click", checkboxClick);
    });

    //radio
    const radio = document.querySelectorAll(".jt-radiobox input");
    let radio_checked = false;
    function radioClick() {
        let radioArray = document.querySelectorAll('input[name="data\\[4\\]"]:checked').length;
        if(radioArray <= 1){
            radio_checked = true;
        }
    }
    radio.forEach((item) => {
        item.addEventListener("click", radioClick );
    });
   
    //selectric 1번
    const primary = document.querySelector('.selectric-Primary');
    const primaryEl = primary.querySelectorAll('.selectric-scroll ul li');
    let primaryel = {
        checked: false
      }; //객체로 전달하는 이유는 위에 코드들은 인자값 전달하지 않아서 상관없지만 인자 전달해서 변수를 가져와야할때 원시타입들은 복사본을 생성하고 객체나 배열은 참조값을 전달함. 함수내에서 객체나 배열을 수정하면 원본 변수에 직접적으로 영향을 줄수있기때문에 객체로 전달해서 이 값을 다른 함수내에서 다시 사용할수있음 
      
    function selectClick(item, val){
        if(item.dataset.index > 0 && item.classList.contains('selected')){
            val.checked= true;
            console.log(val.checked)
        }
    }
    primaryEl.forEach((item)=>{
      item.addEventListener('click',(e)=>{
        //첫번째 제외하고 선택된 애들 
        selectClick(item, primaryel)
        });
    });

    //selectric 2번 
    const secondary = document.querySelector('.selectric-Secondary');
    const secondaryEl = secondary.querySelectorAll('.selectric-scroll ul li');
    secondaryEl.forEach((item)=>{
      item.addEventListener('click',(e)=>{
        //첫번째 제외하고 선택된 애들 
            if(item.dataset.index > 0 && item.classList.contains('selected')){ console.log("select") }
        });
    });



    //제출하기 버튼 클릭 액션
    const submitBtn = document.querySelector(".jt-form__action");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        //data0이 빈값일때
        if(data0.value == '') {
            console.log('필수입력');
        }

        //data1 11자리가 아니일때??
        if(data1.value == '') {
            console.log('필수입력');
        }
        //data2 이메일이 정규식이 안맞을때

        //체크박스 2개이상 선택
        if(!checkbox_checked){
            console.log('checkbox less than 2')
        }
        //라디오 1개이상 선택 
        if(!radio_checked){
            console.log('radio not checked')
        }
        
        if(!primaryel.checked){
            console.log('is not checked')
        }
      
        //jt-form__data > span style display: block;
        //아니면 
/*
        const el = document.querySelector('.jt-form__data');
        el.insertAdjacentHTML('beforeend', '<span class="jt-form__valid jt-typo--14 mandatory">필수항목을 입력해 주세요.</span>');
    
        const el2 = document.querySelector('.jt-form__data');
        el2.insertAdjacentHTML('afterend', '<span class="jt-form__valid jt-typo--14 mandatory">필수항목을 입력해 주세요.</span>');
        // }
*/


    });
}
validation();
