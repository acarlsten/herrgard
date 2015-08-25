/* Slides */
$(function(){
    $(".slides").slidesjs({
    width: 800,
    height: 227,
    pagination: false,
    generatePagination: false,
    navigation: false,
    play: {
        active: false,
        effect: "slide",
        interval: 5000,
        auto: true,
        swap: false,
        pauseOnHover: true,
        restartDelay: 2000
      }
    });
  });
