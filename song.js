
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift('Stairway to Heaven > Maurizio Colonna album Rock Waves genre Rock');

songs.push('Hotel California > Eagles album Hotel California genre Rock');


var ulElem = document.createElement('UL');
var liElem = "";
var songLine = "";

for (var i=0; i<songs.length; i++)
{
	songLine = songs[i].replace(/(?!\w|\s)./g, '');
	liElem = document.createElement('LI');
	liElem.appendChild(document.createTextNode(songLine));
 	ulElem.appendChild(liElem);
}
 
 songElm = document.getElementById("songs");
 songElm.innerHTML = ulElem.innerHTML;
