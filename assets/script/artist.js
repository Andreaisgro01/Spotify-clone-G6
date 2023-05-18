const ARTIST_URL =  "https://striveschool-api.herokuapp.com/api/deezer/artist/"


let addressBarContent = new URLSearchParams(window.location.search)
let artistId = addressBarContent.get('artistId')
let songTarget = document.getElementById('songTarget')




const getArtistTrack = () =>{
  fetch(ARTIST_URL + artistId)
  
  .then((res) => {
    console.log('RES', res)
    if (res.ok) {

        return res.json()

    } else {
        throw new Error('Error fetching artist')
    }
})
  .then((data)=>{
    fillHeader(data)
    console.log("artist", data)
    let popularTracks = data.tracklist
    fetch(popularTracks)
    .then((response) => {
        if (response.ok) {

        return response.json()

        } else {
            throw new Error('Error fetching popular tracks')
        }
    })
    .then((popular)=>{
        popularFill(popular)
        console.log(popular)

    })
    .catch((errore)=>{
        console.log(errore)
    })

  })

  .catch((err)=>{
    console.log(err)
  })


  
}


const fillHeader = (data) => {
    let artistHeader = document.getElementById('artistaHead')
    artistHeader.innerHTML = "";

    let artistImage = document.getElementById("artistImage")
    artistImage.style.background= `
        url(${data.picture_xl})
    `
     

    let headFiller = `
    <p class="pt-5 mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3E91F4" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
        </svg>
        Artista Verificato
    </p>
  <h2 class="artistName mb-3">${data.name}</h1>
  <p class="py-2">${data.nb_fan} followers</p>
    `
    artistHeader.innerHTML += headFiller
}

const popularFill = (popular) =>{
    let targetSong = document.getElementById('songTarget')
    targetSong.innerHTML = "";

    let popularCounter = 0
    let popularArray = popular.data;
    popularArray.forEach(element =>{
        popularCounter += 1
        targetSong.innerHTML += `
        <div class="col-8 mt-5">
            <span>${popularCounter}</span>
            <img src="${element.album.cover}" alt="foto">
            <span>${element.title}</span>
        </div>
        <div class="col-3">
            <span>${element.rank}</span>
        </div>
        <div class="col-1">
            <span>${Math.floor((element.duration)/60)}:${(element.duration) % 60}</span>
        </div>    
        `
    })


}


getArtistTrack()










// const appendTracks =  function (datatracks){
//     let tracklist = datatracks.tracks.data
//     songTarget.innerHTML = "";
//     for (let i=1; i<=5; i++) {
//             let content = `
//             <div class="col-8 mt-5">
//                 <span>${i}</span>
//                 <img src= ${tracklist.cover} alt="foto">
//                 <span>${tracklist.title}</span>
//             </div>
//             <div class="col-3">
//                 <span>${tracklist.rank}</span>
//             </div>
//             <div class="col-1">
//                 <span>${Math.floor((tracklist.duration)/60)} : ${(tracklist.duration) % 60}</span>
//             </div>
            
//     `
//     songTarget.innerHTML += content;
//     }


  
// }

// window.onload = () => {
//   getArtistTrack()
// }


// {"id":412,"name":"Queen","link":"https://www.deezer.com/artist/412",
// "share":"https://www.deezer.com/artist/412?utm_source=deezer&utm_content=artist-412&utm_term=0_1684331188&utm_medium=web","picture":"https://api.deezer.com/artist/412/image",
// "picture_small":"https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/56x56-000000-80-0-0.jpg",
// "picture_medium":"https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/250x250-000000-80-0-0.jpg",
// "picture_big":"https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/500x500-000000-80-0-0.jpg",
// "picture_xl":"https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/1000x1000-000000-80-0-0.jpg",
// "nb_album":61,"nb_fan":10876960,"radio":true,"tracklist":"https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50","type":"artist"}