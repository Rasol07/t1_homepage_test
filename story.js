let clickCount = false;
$('.etc-icon').click(function(){
    if(clickCount == false){
        $('.etc-menu').show();
        clickCount = true;
    }
    else {
        $('.etc-menu').hide();
        clickCount = false;
    }
    console.log(clickCount);
})

let emojiPlusCount = false;
$('.emoji-plus').click(function(){
    if(emojiPlusCount == false) {
        // $('.emoji-addition').show(); -> 이렇게 하면 display : block 해버려서 깨짐
        $('.emoji-addition').css('display', 'flex');
        emojiPlusCount = true;
    }
    else {
        $('.emoji-addition').hide();
        emojiPlusCount = false;
    }
})

// 스크롤 시 hide 하는 기능 구현해야함