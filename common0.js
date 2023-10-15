// common.js
function playBackgroundMusic() {
    var audio = new Audio('./洛克王国-人鱼湾.mp3');
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.5;
    document.body.appendChild(audio);
}
