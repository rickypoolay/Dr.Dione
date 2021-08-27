$(function () {


    //      Variables
    const videoPlayer = $('.video-player');

    //      Functions

    //Play and Pause Video Function
    function playPauseVideo () {
        const video = $('.video')[0];
        const playButton = $('.play-button');
        if(video.paused) {
            video.play();
            playButton.toggle();
        } else {
            video.pause();
            playButton.toggle();
        }
    }

    //      Slick.js

    $(".slick").slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        pauseOnHover: false,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
    });
    
    //      EventListeners

    //Play and Pause Video
    videoPlayer.click(playPauseVideo);

});