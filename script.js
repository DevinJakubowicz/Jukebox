

var audio;
var dir = ""
var playlist ["","",""];
var playlist_index = 0;
var ext = ".mp3";
var playButton = playButton.addEventListener("click", playPause)
var stopButton = stopButton.addEventListener("click", stop)
audio = new Audio();
audio.src = dir +playlist[0]+ext;
audio.loop = false;
audio.play_audio();

function Jukebox () {

		songlibrary = [];

		this.songlibrary = songlibrary;

		this.addSong = function(newTrack) {

			this.songlibrary.push(newTrack);
		}

		function switchSong(){
			if (playlist_index == (playlist.length - 1)){
				playlist_index = 0:
			}
				else {
					playlist_index++;
				}
				audio.src = dir+playlist[playlist_index]+ext;
				audio.play();
		}



		function playPause() {
			if (audio.paused) {
				audio.play();
				playButton.style.background = url("https://cdn3.iconfinder.com/data/icons/player/128/sound-08-128.png") no-repeat;
			}
				else {
					audio.pause()
					playButton.style.background = url("https://cdn0.iconfinder.com/data/icons/most-useful-icons/50/PAUSE-128.png") no-repeat;
				}
		}

		function stop () {
			if (audio.stopped) {
				audio.stopped = false;
				stopButton.style.background = url("http://www.myiconfinder.com/uploads/iconsets/128-128-f53b4ab743ce25cc599e7384e68c8f07.png") no-repeat;
			}
				else {
					audio.stopped = true;
					stopButton.style.background = url("http://www.myiconfinder.com/uploads/iconsets/128-128-f53b4ab743ce25cc599e7384e68c8f07.png")
				}
		}



	};



