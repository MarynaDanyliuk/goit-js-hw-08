import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  console.log('the time was updated to: ', +data.seconds);
};
player.on('timeupdate', onPlay);

('videoplayer-current-time');

player
  .getCurrentTime()
  .then(function (seconds) {
    console.log(+seconds, 'current seconds ');
    // seconds = the current playback position
  })
  .catch(function (error) {
    // an error occurred
  });

// player.on('play', onPlay);
