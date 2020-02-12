
var player;
    function onYouTubeIframeAPIReady() {
        console.log(video_id);
    player = new YT.Player('heroVideo', {
        videoId: video_id,
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        },
        host: 'http://www.youtube-nocookie.com',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'mute': 1,
            'enablejsapi': 1,
            'loop' : 1,
            'playlist': video_id},
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        document.getElementById('heroVideo').style.opacity = 1;
    }

    if (event.data == YT.PlayerState.ENDED) {
        document.getElementById('heroVideo').style.opacity = 0;
    }
}

