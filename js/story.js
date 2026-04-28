// 왼쪽 탭이랑 오른쪽 화면 맞추기
// index() , eq() 
$('.member-list-item').click(function(){
    let index = $(this).index(); // 왼쪽 탭의 인덱스 가져오기
    console.log(index);
    // 저 인덱스 값을 .content-list-item index를 show하면 됨
    $('.content-list-item').hide();

    window.scrollTo({
        top : 0
    });
    $('.content-list-item').eq(index).show();
})

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