import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

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
  // console.log(totalTimePlay);
  localStorage.setItem(STORAGE_KEY, totalTimePlay);

  if (localStorage.getItem(STORAGE_KEY) === null) {
    player.on('play', function () {
      console.log('played the video!');
    });
  }

  console.log(localStorage);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = window.localStorage[STORAGE_KEY];

console.log(currentTime);

player.setCurrentTime(currentTime);
