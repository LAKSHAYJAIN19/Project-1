console.log("Welcome to Musify");
// Initialize the Variables
// let songindex=0;
// let audioElement = new Audio('songs/better.mp3');
let masterPlay1 = document.getElementById('masterPlay1');
masterPlay1.addEventListener('click',function(){
        <iframe style="border-radius:12px; text-align: right; margin-left: 220px; margin-top: 330px;" src="https://open.spotify.com/embed/playlist/3kIwCVm8xC0gUX93SPtFxZ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    })
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById("gif");
// let songs = [
//     {songname:"Better",filePath:"songs/better.mp3",coverPath:"covers/better.jpg"}
// ]
// var element = document.getElementById("masterPlay1");
// element.onclick = function(){
//     <iframe style="border-radius:12px; text-align: right; margin-left: 220px; margin-top: 330px;" src="https://open.spotify.com/embed/playlist/3kIwCVm8xC0gUX93SPtFxZ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
// }
// Handle play/pause click
// masterPlay1.addEventListener('click',()=>{
//     <iframe style="border-radius:12px; text-align: right; margin-left: 220px; margin-top: 330px;" src="https://open.spotify.com/embed/playlist/3kIwCVm8xC0gUX93SPtFxZ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
// })
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0)
//     {
//         // <iframe style="border-radius:12px; text-align: right;" src="https://open.spotify.com/embed/playlist/3kIwCVm8xC0gUX93SPtFxZ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else
//     {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// });
// // Listening to events
// audioElement.addEventListener('timeupdate',()=>{
//     //Update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//     myProgressBar.value = progress;
// });
// myProgressBar.addEventListener('change',()=>{
//     audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
// })