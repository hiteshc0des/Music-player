$(document).ready(function () {
  var audio = $("#audio")[0];
  var playlist = $("#playlist");
  var tracks = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      src: "./m1.mp3",
      img: "https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg",
    },
    {
      title: "Shape of You",
      artist: " Ed Sheeran",
      src: "./m2.mp3",
      img: "https://i.ytimg.com/vi/_0zc9TuJ9gA/maxresdefault.jpg",
    },
    {
      title: "At My Worst",
      artist: "Pink Sweat$",
      src: "./m3.mp3",
      img: "https://i.vimeocdn.com/video/1087473908-4efd33ebcb9ba9a22af39045fc4955f80fa330ad716140975d05a17b5091883c-d",
    },
  ];
  var currentTrack = 0;

  function loadTrack(index) {
    var track = tracks[index];
    $("#track-title").text(track.title);
    $("#track-artist").text(track.artist);
    audio.src = track.src;
    audio.load();

    // $("#current-track-image").attr("src", track.img);
    $(".player").css("background-image", "url(" + track.img + ")");
  }

  function playTrack() {
    audio.play();
    $("#play-pause").text("Pause");
  }

  function pauseTrack() {
    audio.pause();
    $("#play-pause").text("Play");
  }

  function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    playTrack();
  }

  function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    playTrack();
  }

  $("#play-pause").click(function () {
    if (audio.paused) {
      playTrack();
    } else {
      pauseTrack();
    }
  });

  $("#next").click(nextTrack);
  $("#prev").click(prevTrack);

  tracks.forEach(function (track, index) {
    var li = $("<li>").text(track.title + " - " + track.artist);
    li.click(function () {
      currentTrack = index;
      loadTrack(currentTrack);
      playTrack();
    });
    playlist.append(li);
  });

  loadTrack(currentTrack);
});
