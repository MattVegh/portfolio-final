function imagePop() {
    $(".trigger_popup").click(function(){
        let imgSrc = $(this).find(".app-ss").attr("src")
        console.log(imgSrc)
        $(".popup-img-link").attr("href", imgSrc)
        $(".popup-ss").attr("src", imgSrc)
       $(".popup-box").show();
    });
    $(".popup-box").click(function(){
        $(".popup-box").hide();
    });
    $(".popup-close-button").click(function(){
        $(".popup-box").hide();
    });
};

imagePop();
