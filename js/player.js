if (!localStorage.getItem("loggedIn")) {
  window.location.href = "index.html";
}

const songs = [
  { name: "Me rahoo ya na rahoo", src: "assets/songs/song1.mpeg" },
  { name: "Geta govinda bgm", src: "assets/songs/song2.mpeg" },
  { name: "Airtel phonk🔥", src: "assets/songs/song3.mpeg" }
  
];

let index = 0;
let audio = document.getElementById("audio");
let likedSongs = JSON.parse(localStorage.getItem("likes")) || [];

function loadSong(i) {
  audio.src = songs[i].src;
  songTitle.innerText = songs[i].name;
  updateLike();
}
loadSong(index);

function playPause() {
  audio.paused ? audio.play() : audio.pause();
}

function nextSong() {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
}

function likeSong() {
  let song = songs[index].name;
  if (likedSongs.includes(song)) {
    likedSongs = likedSongs.filter(s => s !== song);
  } else {
    likedSongs.push(song);
  }
  localStorage.setItem("likes", JSON.stringify(likedSongs));
  updateLike();
}

function updateLike() {
  likeBtn.innerText = likedSongs.includes(songs[index].name)
    ? "❤️ Liked"
    : "🤍 Like";
}

/* Song List */
songs.forEach((song, i) => {
  let li = document.createElement("li");
  li.innerText = song.name;
  li.onclick = () => {
    index = i;
    loadSong(i);
    audio.play();
  };
  songList.appendChild(li);
});
