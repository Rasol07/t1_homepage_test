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