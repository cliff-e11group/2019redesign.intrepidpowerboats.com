
if(typeof video_embed_id !== 'undefined'){
    var player;
    function onYouTubeIframeAPIReady() {

    var video_id = video_embed_id.replace('https://www.youtube/embed/', '');

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
}
