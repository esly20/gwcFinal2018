// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'rY-FJvRqK0E',
      events: {
        'onReady': onPlayerReady,
      }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //player.playVideo()
}
//
// function Play(){
//    player.playVideo()
// }
//
// function Pause(){
//   player.pauseVideo()
// }
//
// function other(){
//   player.loadVideoById({videoId:"aUTU-GnxVuM"})
// }
//
// function next(){
//   player.loadVideoById({videoId:"Nqqc2FHf9Ug"})
// }
