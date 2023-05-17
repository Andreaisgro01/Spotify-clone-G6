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
    console.log("artist ", data)
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