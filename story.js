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