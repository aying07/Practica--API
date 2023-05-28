const videoPlayer = document.getElementById('videoPlayer');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const subirVolumen = document.getElementById('subirVolumen');
const bajarVolumen = document.getElementById('bajarVolumen');
const cargando = document.getElementById('cargando');


play.addEventListener('click', () => {
    videoPlayer.play();
});

pause.addEventListener('click', () => {
    videoPlayer.pause();
});

videoPlayer.addEventListener('cargando', () => {
    cargando.style.display ='none';
})

subirVolumen.addEventListener('click', () => {
    videoPlayer.volume += 0.1;
});

bajarVolumen.addEventListener('click', () => {
    videoPlayer.volume -= 0.1;
});

videoPlayer.addEventListener('error', () => {
    alert ('No se puede reproducir el video');
});


function handleFileSelect (file) {
    if (!file.type.match('video/mp4')) {
        alert('El formato de video no es compatible.');
        return;
    } 

    const fileUrl = URL.createObjectURL(file);
    videoPlayer.src = fileUrl;
    cargando.style.display ='block';

    videoPlayer.addEventListener('canplaythrough', () => {
        cargando.style.display = 'none';
        videoPlayer.play();
    }, {once: true});
}
