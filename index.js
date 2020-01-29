function imagePop() {
    $(".trigger_popup").click(function(){
       $('.popup-box').show();
    });
    $('.popup-box').click(function(){
        $('.popup-box').hide();
    });
    $('.popup-close-button').click(function(){
        $('.popup-box').hide();
    });
};

imagePop();
