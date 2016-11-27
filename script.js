function Jukebox () {
	this.songs [];
	this.addTrack = function(song) {
		this.song.push(song);
		}	
}

var music = document.getElementById('audio_player');
  
function playAudio() {
  if (music.paused) {
    music.play();
    pButton.className = "";
    pButton.className = "pause";
  } else {
    music.pause();
    pButton.className = "";
    pButton.className = "play";
  }
}