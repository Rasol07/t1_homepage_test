// 데이터
const characterData = [
    {
        id : "gugu",
        tabName : "구구즈",
        tabImg : "../images/char1.png",
        contentImg : "../images/비둘기의 눈.png",
        text : "비둘기는 자신의 눈을 알고 있는가?<br>눈 색이, 모양이 어떨지 말이다.",
        time : "7시간 전"
    },
    {
        id : "sekai",
        tabName : "무의 세계",
        tabImg : "../images/아닐시아.png",
        contentImg : "../images/무의세계_메인.jpg",
        text : "비둘기는 자신의 눈을 알고 있는가?<br>눈 색이, 모양이 어떨지 말이다.",
        time : "7시간 전"
    },
    {
        id : "goodbye",
        tabName : "작별여행",
        tabImg : "",
        contentImg : "../images/비둘기의 눈.png",
        text : "비둘기는 자신의 눈을 알고 있는가?<br>눈 색이, 모양이 어떨지 말이다.",
        time : "7시간 전"
    },
    {
        id : "star",
        tabName : "새벽별",
        tabImg : "../images/추인하.png",
        contentImg : "../images/비둘기의 눈.png",
        text : "비둘기는 자신의 눈을 알고 있는가?<br>눈 색이, 모양이 어떨지 말이다.",
        time : "7시간 전"
    },
    {
        id : "commu",
        tabName : "각종 커뮤",
        tabImg : "",
        contentImg : "../images/비둘기의 눈.png",
        text : "비둘기는 자신의 눈을 알고 있는가?<br>눈 색이, 모양이 어떨지 말이다.",
        time : "7시간 전"
    },
];

// 왼쪽 탭 메뉴 추가하기
const memberList = document.getElementById('memberList');
const contentList = document.getElementById('contentList');

characterData.forEach(data => {
    const tab = document.createElement('div'); // createElement랑 createAttribute 차이
    const hasImg = data.tabImg !== "";
    tab.className = 'member-list-item';
    tab.innerHTML = `
        <img ${hasImg ? `src = ${data.tabImg}` : ""} class = "nothing-img">
        <span>${data.tabName}</span>
    `;

    // 클릭했을 때 모습.
    tab.onclick = () => {
        updateTab(data);
        window.scrollTo(
            {
                top : 0,
                behavior : 'smooth'
            }
        );
    }
    
    // 위에서 추가해야할 것의 구조를 만듦.
    // 저런 식으로 자동으로 만들 때는 구조를 먼저 생각하고, 자식 형태 반복이면 이렇게 만든다.
    // 아무래도 this라서 이렇게 작성하는 게 좋겠구나.
    memberList.appendChild(tab); 
});
// 이런 식으로 위의 필요한 데이터들 맞춰놓고... forEach 문으로 돌려서 각 구조들 만드는 형식으로 하면 됨.

// 오른쪽 탭 만들기
function updateTab(data) {
    contentList.innerHTML = `
        <div class = "content-list-item">
            <button class = "content-plus-button"> + </button>
                <div class = "content-list-data">
                    <div class = "content-header">
                        <div class = "name">
                            <img src = "${data.tabImg}">
                            <span>${data.tabName}</span>
                        </div>
                        <div class = "more-menu-wrapper">
                            <i class="fa-solid fa-ellipsis-vertical etc-icon"></i>
                            <div class = "etc-menu">
                                <span>링크 복사</span>
                            </div>
                        </div>
                    </div>
                    <div class = "content-img">
                        <img src = "${data.contentImg}">

                    </div>
                    <div class = "content">
                        <p class = "content-paragraph">
                            ${data.text}
                        </p>
                    </div>
                    <div class = "content-info">
                        <span class = "time-pass">
                            ${data.time}
                        </span>
                        <span>
                            ·
                        </span>
                        <div>
                            <i class="fa-solid fa-face-grin"></i>
                            <span class = "emoji-count">
                                0
                            </span>
                        </div>
                        <span>
                            ·
                        </span>
                        <div>
                            <i class="fa-solid fa-comment"></i>
                            <span class = "comment-count">
                                0
                            </span>
                        </div>
                    </div>
                    <div class = "comments">
                        <img src = "./images/엔닝.jpg">
                        <span class= "font user-name">
                            엔닝
                        </span>
                        <span class = "font best-comment">
                            관련된 항목 댓글입니다.
                        </span>
                    </div>
                    <div class = "emoji-wrapper">
                        <div class = "emoji">
                            <span class = "emoji-img">😊</span>
                            <span class = "emoji-sum">3,219</span>
                        </div>
                        <div class = "emoji">
                            <span class = "emoji-img">❤️</span>
                            <span class = "emoji-sum">0</span>
                        </div>
                        <div class = "emoji">
                            <span class = "emoji-img">👍</span>
                            <span class = "emoji-sum">0</span>
                        </div>
                        <div class = "emoji">
                            <span class = "emoji-img">😢</span>
                            <span class = "emoji-sum">0</span>
                        </div>
                        <div class = "emoji">
                            <span class = "emoji-img">😡</span>
                            <span class = "emoji-sum">0</span>
                        </div>
                        <div class = "emoji">
                            <span class = "emoji-img">🎉</span>
                            <span class = "emoji-sum">0</span>
                        </div>
                        <div class = "emoji">
                            <span class = "emoji-img">🍿</span>
                            <span class = "emoji-sum">0</span>
                        </div>
                        <div class = "emoji">
                            <span class = "emoji-img">✅</span>
                            <span class = "emoji-sum">0</span>
                        </div>
                        <div class = "emoji">
                            <span class = "emoji-img">😯</span>
                            <span class = "emoji-sum">0</span>
                        </div>
                        <div class = "emoji">
                            <span class = "emoji-img">🌸</span>
                            <span class = "emoji-sum">0</span>
                        </div>
                        <div class = "emoji-plus">
                            <i class="fa-solid fa-plus"></i>
                            <div class = "emoji-addition">
                                <div class = "emoji-exam">
                                    😊
                                </div>
                                <div class = "emoji-exam">
                                    ❤️
                                </div>
                                <div class = "emoji-exam">
                                    👍
                                </div>
                                <div class = "emoji-exam">
                                    😢
                                </div>
                                <div class = "emoji-exam">
                                    😡
                                </div>
                                <div class = "emoji-exam">
                                    🎉
                                </div>
                                <div class = "emoji-exam">
                                    🍿
                                </div>
                                <div class = "emoji-exam">
                                    ✅
                                </div>
                                <div class = "emoji-exam">
                                    😯
                                </div>
                                <div class = "emoji-exam">
                                    🌸
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `
}

updateTab(characterData[0]);



// let clickCount = false;
// $('.etc-icon').click(function(){
//     if(clickCount == false){
//         $('.etc-menu').show();
//         clickCount = true;
//     }
//     else {
//         $('.etc-menu').hide();
//         clickCount = false;
//     }
//     console.log(clickCount);
// })

// 이런 식의 개인적인 하나 하나의 반복적인 작업에선
// this 를 쓰면 편하구나~

// etc 버튼 눌렀을 떄
$('.etc-icon').click(function(){
    let target = $(this).siblings('.etc-menu');
    target.toggle();
})

// emoji 선택했을 때 색 변화
// 간단한 토글 작업은 toggleclass 이용해서도 가능함
$(document).on('click', '.emoji', function() {
    $(this).toggleClass('active');

    let emojiCountElement = $(this).find('.emoji-sum');

    // 위의 값을 가져올 때는 text()로 하는데 이걸 우린 숫자로 해야함
    let emojiSum = Number(emojiCountElement.text().replace(/,/g, ''));
    if($(this).hasClass('active')) {
        emojiCountElement.text((emojiSum+1).toLocaleString());
    }
    else {
        emojiCountElement.text((emojiSum-1).toLocaleString());
    }
    
    
})


// 이모지 박스 추가 버튼 눌렀을 때
$('.emoji-plus').click(function(){
    let target = $(this).find('.emoji-addition');
    if(target.css('display') === 'none') {
        target.css('display', 'flex');
    }
    else {
        target.hide();
    }
})

// 외부 부분을 눌렀을 때 다 꺼지게 -> this가 필요 없음
$(document).click(function(e) {
    if(!$(e.target).closest('.more-menu-wrapper, .emoji-plus').length){
        $('.etc-menu, .emoji-addition').hide();
    }
})

// let emojiPlusCount = false;
// $('.emoji-plus').click(function(){
//     if(emojiPlusCount == false) {
//         // $('.emoji-addition').show(); -> 이렇게 하면 display : block 해버려서 깨짐
//         $('.emoji-addition').css('display', 'flex');
//         emojiPlusCount = true;
//     }
//     else {
//         $('.emoji-addition').hide();
//         emojiPlusCount = false;
//     }
// })

// // 스크롤 시 hide 하는 기능 구현해야함

// top 버튼 구현
const upButton = $('.up-button');
upButton.click(function(){
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    });
})

// top 버튼 위치에 따른 hide / show 
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 1) {
        upButton.css('display', 'flex');
    }
    else {
        upButton.css('display', 'none');
    }
})