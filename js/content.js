// 호버 했을 때 나오게

$('.thumbnail-wrapper').mouseenter(function() {
    $('.button').css('display', 'flex');
})

$('.thumbnail-wrapper').mouseleave(function() {
    $('.button').hide();
})

const leftButton = $('.left-button');
const rightButton = $('.right-button');

// 길이 최대기
const maxLength = $('.thumbnail-container').length;
let currentImg = 0;
let moveLength = 0;

console.log(maxLength);

function updateSlide() {
    let distance = currentImg * -100;
    $('.thumbnail-track').css('transform', `translateX(${distance}%)`);
}

rightButton.click(function() {
    // 최대치가 아니면 넘어가게
    if(currentImg < maxLength - 1) {
        currentImg++;
        console.log(currentImg);
        console.log(maxLength);
        updateSlide();
    }
})

leftButton.click(function() {
    if(currentImg > 0) {
        currentImg--;
        updateSlide();
    }
})

// 초마다 변경 하는 거 - setInterval(function(), 숫자ms)
let autoSlide = setInterval(() => {
    if(currentImg < maxLength -1){
        currentImg++;
    }
    // 끝까지 해서 돌아가면 0으로 돌아가야함
    else {
        currentImg = 0;
    }
    updateSlide();
}, 5000)