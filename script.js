
// function Jukebox () {
// 	this.songs [];
// 	this.addTrack = function(song) {
// 		this.song.push(song);
// 		}	
// }

var audio;
var dir = ""
var playlist ["","",""];
var playlist_index = 0;
var ext = ".mp3";

audio = new Audio();
audio.src = dir +playlist[0]+ext;
audio.loop = false;


function Jukebox () {

		songlibrary = [];

		this.songlibrary = songlibrary;

		this.addSong = function(newTrack) {

			this.songlibrary.push(newTrack);
		}

	};


// document.addEventListener("DOMContentLoaded", function() { startplayer(); }, true);
// var Jukebox;

// function startplayer() 
// {
//  Jukebox = document.getElementById('player');
//  // player.controls = false;
// }


// function play_audio() 
// {
//  Jukebox.play();
// } 

// function pause_audio() 
// {
//  Jukebox.pause();
// }


// function stop_audio() 
// {
//  Jukebox.pause();
//  Jukebox.currentTime = 0;
// }

// function change_vol()
// {
//  Jukebox.volume=document.getElementById("change_vol").value;
// }

