let player;
// const playerContainer = $(".player");

// let eventsInit = () => {
//   $(".player__start").on("click", event => {
//     event.preventDefault();

//     if (playerContainer.hasClass("paused")) {
//       playerContainer.removeClass("paused");
//       player.pauseVideo();
//     } else {
//       playerContainer.addClass("paused");
//       player.playVideo();
//     }
//   });
// }

function onYouTubeIframeAPIReady() {

  player = new YT.Player("yt-player", {
    height: "390",
    width: "660",
    videoId: "jfKfPfyJRdk",
    // playerVars: {
    //   "playsinline": 1
    // },
    events: {
      // "onReady": onPlayerReady,
      // "onStateChange": onPlayerStateChange
    },
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      modestbranding: 0
    }
  });
}

// eventsInit();

// window.onYouTubeIframeAPIReady = function() {
//   player = new YT.Player("yt-player", {
//     height: "390",
//     width: "660",
//     videoId: "jfKfPfyJRdk",
//     // playerVars: {
//     //   "playsinline": 1
//     // },
//     events: {
//       // "onReady": onPlayerReady,
//       // "onStateChange": onPlayerStateChange
//     },
//     playerVars: {
//       autoplay: 0,
//       controls: 0,
//       disablekb: 0,
//       showinfo: 0,
//       rel: 0,
//       modestbranding: 0
//     }
//   });
// }
