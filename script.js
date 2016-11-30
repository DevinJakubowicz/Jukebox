
function Jukebox () {


	var audio, playButton, pauseButton, stopButton, nextSong, play, pause, switchSong;
	var dir = "../Jukebox/";
	var playlist = ["kidRock","Hozier","deathCab"];
	var playlist_index = 0;
	var ext = ".mp3";

	playButton = document.getElementById("playBtn");
	pauseButton = document.getElementById("pauseBtn");
	stopButton = document.getElementById("stopBtn");
	nextSong = document.getElementById("nextBtn");

	playButton = playButton.addEventListener("click", play);
	pauseButton = pauseButton.addEventListener("click", pause);
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



		this.play = function () {
			
				audio.play();
				
		}

		this.pause = function () {

				audio.pause();
		}

		this.stop = function () {
		
				audio.pause();
			
		}				
};

window.addEventListener("load", Jukebox);


