import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
  console.log('played the video!');
});

player.on('timeupdate', _.throttle(handlerTimer, 1000, { trailing: false }));

function handlerTimer(event){
  localStorage.setItem("videoplayer-current-time", event.seconds);
  console.log(localStorage.getItem("videoplayer-current-time"));
}
 
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});
