$(document).ready(function(){
    let currentIdx = 0;
    const slideCount = $('.info-image').length;
    const itemsPerView = 7;
    const maxIdx = slideCount - itemsPerView;

    // 각 버튼이 보여야하는 때
    function updateButtons() {
        // 왼쪽 버튼 안 보일 때, currentIdx 0보다 작으면
        if(currentIdx <= 0) {
            $('.prev-button').hide();
        }
        else {
            $('.prev-button').show();
        }

        // 오른쪽 버튼 안 보일 때 maxIdx일 떄
        if(currentIdx >= maxIdx) {
            $('.next-button').hide();
        }
        else {
            $('.next-button').show();
        }
    }

    // 버튼 눌렸을 때 반응
    // 하나의 idx아 올라가면 그 idx는 나눠진 만큼의 크기가 곱해져서 나오면 됨
    function getMoveDistance() {
        return `calc(-${currentIdx} * (100% + 0.7vw) / 7)`;
    }

    $('.next-button').click(function(){
        if(currentIdx < maxIdx) {
            currentIdx++;
            let moveDist = getMoveDistance();
            console.log(moveDist);
            $('.track').css('transform', `translateX(${moveDist})`);
            updateButtons();
        }
    });

    $('.prev-button').click(function(){
        if(currentIdx > 0) {
            currentIdx--;
            let moveDist = getMoveDistance();
            console.log(moveDist);
            $('.track').css('transform', `translateX(${moveDist})`); // translateX 좌표 자체의 변환이기 때문에 이렇게 들어감.
            updateButtons();
        }
    });
    updateButtons();

    // 아래 트위터 부분 
    let twitterIdx = 0;
    const twitterCount = $('.sns-image').length;
    const twitterView = 4;
    const maxTwitterIdx = twitterCount - twitterView;

    $('.twitter-carosel-wrapper').mouseenter(function(){
        $('.twitter-prev-button, .twitter-next-button').show();
    })
    $('.twitter-carosel-wrapper').mouseleave(function(){
        $('.twitter-prev-button, .twitter-next-button').hide();
    })

    function getTwitterDist() {
        // 애초에 *4 만큼 돌아가기 때문에 이런 식으로 써도 됨.
        return `calc(-${twitterIdx} * 100% / ${twitterView})`
    }

    $('.twitter-next-button').click(function(){
        if(twitterIdx < maxTwitterIdx) {
            twitterIdx += twitterView;
            if(twitterIdx > maxTwitterIdx) {
                twitterIdx = maxTwitterIdx;
            }
            $('.twitter-carosel').css('transform', `translateX(${getTwitterDist()})`);
        }
    })

    $('.twitter-prev-button').click(function(){
        if(twitterIdx > 0) {
            twitterIdx -= twitterView;
            if(twitterIdx < 0) twitterIdx = 0;
            $('.twitter-carosel').css('transform', `translateX(${getTwitterDist()})`);
        }
    })
});


