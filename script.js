
function Jukebox () {


	var audio, playButton, pauseButton, stopButton, nextSong, playPause, switchSong;
	var dir = "../Jukebox/";
	var playlist = ["kidRock","Hozier","deathCab"];
	var playlist_index = 0;
	var ext = ".mp3";

	playButton = document.getElementById("playBtn");
	pauseButton = document.getElementById("pauseBtn");
	stopButton = document.getElementById("stopBtn");
	nextSong = document.getElementById("nextBtn");

	playButton = playButton.addEventListener("click", playPause);
	pauseButton = pauseButton.addEventListener("click", playPause);
	stopButton = stopButton.addEventListener("click", stop);
	nextSong = nextSong.addEventListener("click", switchSong);
	audio = new Audio();
	audio.src = dir+playlist[0]+ext;
	audio.loop = false;
	audio.play();

		songlibrary = [];

		this.songlibrary = songlibrary;

		this.addSong = function(newTrack) {

			this.songlibrary.push(newTrack);
		}

		this.switchSong = function (){
			if (playlist_index == (playlist.length - 1)){
				playlist_index = 0;
			}
				else {
					playlist_index++;
				}
				audio.src = dir+playlist[playlist_index]+ext;
				audio.play();
		}



		this.playPause = function () {
			if (audio.play) {
				audio.play();
				// playButton.style.background = url("https://cdn3.iconfinder.com/data/icons/player/128/sound-08-128.png"), no-repeat;
			}
				
		}

		this.stop = function () {
			if (audio.stopped) {
				audio.stopped = false;
				// stopButton.style.background = url("http://www.myiconfinder.com/uploads/iconsets/128-128-f53b4ab743ce25cc599e7384e68c8f07.png"), no-repeat;
			}
		}				
};

window.addEventListener("load", Jukebox);


