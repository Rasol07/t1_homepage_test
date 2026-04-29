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

// 밑에 캐러셀 작업하기
// 4개씩 넘어가게

const contentRightButton = document.querySelectorAll('.content-right-button');
const contentLeftButton = document.querySelectorAll('.content-left-button');

// 오른쪽 클릭 이벤트는 foreach문으로 해서 반복적으로 계속 돌아가게
contentRightButton.forEach(button => {
    button.addEventListener('click', function() {
        const container = this.closest('.content-carosel');

        // 돌아갈 트랙이랑 이미지
        const track = container.querySelector('.content-track');
        const img = track.querySelectorAll('.content-img');

        // 한 개의 너비 구하기
        const itemWidth = img[0].offsetWidth + 15;

        track.scrollBy({
            left : itemWidth * 4,
            behavior : 'smooth'
        });
    });
})

contentLeftButton.forEach(button => {
    button.addEventListener('click', function() {
        const container = this.closest('.content-carosel');
        const track = container.querySelector('.content-track');
        const img = track.querySelectorAll('.content-img');

        const itemWidth = img[0].offsetWidth + 20;
        
        track.scrollBy({
            left : -(itemWidth * 4),
            behavior : 'smooth'
        });
    })
})