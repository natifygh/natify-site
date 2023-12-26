document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-audio');
    var playPauseButton = document.getElementById('play-pause-button');
    var volumeSlider = document.getElementById('volume-slider');
    audio.volume = volumeSlider.value;
    
    volumeSlider.addEventListener('input', function() {
        audio.volume = volumeSlider.value;
    });

    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    audio.play();
});
