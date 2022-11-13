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
  totalTimePlay = data.seconds;
  console.log(totalTimePlay);

  const VideoStorage = window.localStorage;
  VideoStorage.clear();
  const localStorage_key = 'videoplayer-current-time';
  VideoStorage.setItem(localStorage_key, totalTimePlay);
  console.log(VideoStorage);
};

player.on('timeupdate', onPlay);

const currentTime = window.localStorage[`videoplayer-current-time`];

console.log(currentTime);

player.setCurrentTime(currentTime);
