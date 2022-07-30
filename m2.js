let musics=[

    {
        id:1,
        name:"Namoh Namoh",
        artist:"Amit Trivedi",
        audioSrc:"audios/namo namo.mp3",
        imageSrc:"images/namo.jpg"
    },
    {
        id:2,
        name:"jogi hona",
        artist:"akanksha sharma",
        audioSrc:"audios/06 Jogi - Aakanksha Sharma 320Kbps.mp3",
        imageSrc:"images/jogi.jpg"
    },
    {
        id:3,
        name:"kesariya tera ishq hai piya",
        artist:"Arijit Singh",
        audioSrc:"audios/Kesariya Tera Ishq Hai Piya_64(PagalWorld.com.se).mp3",
        imageSrc:"images/kesariya.jpg"
    },
    {
        id:4,
        name:"saami saami",
        artist:"rajalakshmi Senthiganesh",
        audioSrc:"audios/Saami Saami_64(PagalWorld.com.se).mp3",
        imageSrc:"images/samee.jpg"
    },
    {
        id:5,
        name:"Raatan Lambiyaan",
        artist:"Tanishk Bagchi,Asees Kaur",
        audioSrc:"audios/Raatan Lambiyan_64(PagalWorld.com.se).mp3",
        imageSrc:"images/rataan lambiyaan.jpg"
    }
    

]


for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}




function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    // document.querySelector(".audio").pause();
}