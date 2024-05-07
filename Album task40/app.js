function myAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum("Atif", "Jal Pari");
var album2 = myAlbum("Nazia", "Yong Tarang");
var album3 = myAlbum("Hadiqa", "Dholna");
console.log(album1);
console.log(album2);
console.log(album3);
function myAlbum2(artistName, albumTitle, numberOftracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOftracks: numberOftracks };
}
var album4 = myAlbum2("Atif", "Dil ki baten", 30);
var album5 = myAlbum2("Nazia", "Ankhen", 50);
var album6 = myAlbum2("Hadiqa", "man di moj", 55);
console.log(album4);
console.log(album5);
console.log(album6);
