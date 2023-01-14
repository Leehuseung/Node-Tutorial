// Check for BlobURL support
let blob = window.URL || window.webkitURL;
if (!blob) {
    console.log('Your browser does not support Blob URLs :(');
}
document.getElementById('file').addEventListener('change', function(event){
    let file = this.files[0],
    fileURL = blob.createObjectURL(file);
    console.log(file);
    console.log('File name: '+file.name);
    console.log('File type: '+file.type);
    console.log('File BlobURL: '+ fileURL);
    document.getElementById('audio').src = fileURL;

});



const audio = document.querySelector("audio");

let start_audio_time = 0;
let end_audio_time = 0;

audio.ontimeupdate = () => {
    if((start_audio_time < end_audio_time) &&  (end_audio_time < audio.currentTime)){
        audio.currentTime = start_audio_time;
    }
}


document.addEventListener('keydown',(e) => {
    if(e.key == '['){
        start_audio_time = audio.currentTime;
        end_audio_time = audio.currentTime;
        console.log('-----------------------------------');
        console.log('current_audio_time',start_audio_time);
        console.log('end_audio_time',end_audio_time);
    }
    if(e.key == ']'){
        end_audio_time = audio.currentTime;
        console.log('-----------------------------------');
        console.log('current_audio_time',start_audio_time);
        console.log('end_audio_time',end_audio_time);
    }
    if(e.key == '\\'){
        start_audio_time = 0;
        end_audio_time = 0;
        console.log('초기화');
    }
    if(e.key == ' '){
        if(audio.paused){
            audio.play().then(r => {});
        } else {
            audio.pause();
        }
    }
    if(e.key == 'Backspace'){
        audio.currentTime = start_audio_time;
    }
});
