// slider behavior
const sliderBtns = $(".slider__btn");
const sliderContents = $(".slider__content");
const sliderStep = 260;

sliderBtns.click(function() {
    let sliderContent = $(this).siblings(".slider__content");
    let currentPosition = sliderContent.scrollLeft();
    
    if ( $(this).hasClass("slider__btn--right") ) {
        // in case the user clicks the right btn of the slider
        sliderContent.scrollLeft(currentPosition + sliderStep);
    }
    else {
        // in case the user clicks the left btn of the slider
        sliderContent.scrollLeft(currentPosition - sliderStep);
    }
})


sliderContents.scroll(function() {
    let scrollLeftMax = $(this).prop("scrollWidth") - $(this).prop("clientWidth");
    let currentPosition = $(this).scrollLeft();
    let sliderContent = $(this);
    let sliderBtns = sliderContent.siblings(".slider__btn");
    let sliderRightBtn = sliderBtns.siblings(".slider__btn--right");
    let sliderLeftBtn = sliderBtns.siblings(".slider__btn--left");


    // in case the user reaches the end of the sliderContent
    sliderBtns.removeClass("slider__btn--hidden");

    switch (currentPosition) {
        case scrollLeftMax:
            // if the end of sliderContent is reached
            sliderRightBtn.addClass("slider__btn--hidden");
            break;

        case 0:
            // if the beggining of sliderContent is reached
            sliderLeftBtn.addClass("slider__btn--hidden");
    }

}).trigger("scroll")