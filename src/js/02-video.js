import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

console.log(player);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

let totalTimePlay = 0;

const onPlay = function (data) {
  console.log('the time was updated to: ', +data.seconds);
  totalTimePlay += data.seconds;
  console.log(totalTimePlay);
};

player.on('timeupdate', onPlay);

console.log(totalTimePlay);

const VideoStorage = window.localStorage;
VideoStorage.clear();

console.log(VideoStorage);

const localStorage_key = 'videoplayer-current-time';

VideoStorage.setItem(localStorage_key, totalTimePlay);

// JSON.stringify(totalTimePlay);

// player.on(
//   'timeupdate',
//   () => (VideoStorage[localStorage_key] = localStorage.currentTime)
// );
