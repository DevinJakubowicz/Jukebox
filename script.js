
function Jukebox () {
	this.songs [];
	this.addTrack = function(song) {
		this.song.push(song);
		}	
}

document.addEventListener("DOMContentLoaded", function() { startplayer(); }, true);
var player;

function startplayer() 
{
 player = document.getElementById('music_player');
 player.controls = false;
}


function play_audio() 
{
 player.play();
} 
