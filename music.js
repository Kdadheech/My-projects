let currentmusic=0;
const music = document.querySelector('#audio');
const seekbar= document.querySelector('.seekbar');
const SongName= document.querySelector('.Song');
const ArtistName= document.querySelector('.Artist');
const currenttime= document.querySelector('.currenttime');
const timeduration= document.querySelector('.timeduration');
const playbtn= document.querySelector('.playbtn');
const prebtn= document.querySelector('.prebtn');
const nxtbtn= document.querySelector('.nextbtn');
const disk= document.querySelector('.disk');

playbtn.addEventListener('click',( )=>{
    if(playbtn.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }
    playbtn.classList.toggle('pause');
    disk.classList.toggle('play')
})

const setMusic=(i) => {
    seekbar.value=0;
    let song=songs[i];
    currentmusic=i;
    music.src=song.path;

    SongName.innerHTML=song.name;
    ArtistName.innerHTML=song.artist;
    
    currenttime.innerHTML='00.00';
    setTimeout(()=>{
        seekbar.max=music.duration;
       timeduration.innerHTML = formatTime(music.duration);
    },300)
}
setMusic(0);

const formatTime =(time) =>{
    let min =Math.floor(time / 60);
    if(min<10){
        min = `0${min}`;
    }
    let sec=Math.floor(time % 60);
    if(sec<10){
            sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}
setInterval(()=>{
    seekbar.value=music.currenttime;
    currenttime.innerHTML = formatTime(music.currenttime);
},500)

seekbar.addEventListener('change',() =>{
    music.currenttime=seekbar.value;
})


