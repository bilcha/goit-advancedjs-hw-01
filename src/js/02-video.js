import Player from "@vimeo/player";
import throttle from 'lodash.throttle';
import "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
  console.log('played the video!');
});

player.on('timeupdate', throttle(handlerTimer, 1000, { trailing: false }));

function handlerTimer(event){
  localStorage.setItem("videoplayer-current-time", event.seconds);
}
 
player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});
