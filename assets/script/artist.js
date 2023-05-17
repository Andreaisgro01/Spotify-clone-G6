const ARTIST_URL =  "https://striveschool-api.herokuapp.com/api/deezer/artist/"
let addressBarContent = new URLSearchParams(window.location.search)
let artistId = addressBarContent.get('artistId')
let appendArtist = document.getElementById('appendArtist')




const getArtist = () =>{
  fetch(ARTIST_URL + artistId)
  
  .then((res) => {
    console.log('RES', res)
    if (res.ok) {

        return res.json()
    } else {
        throw new Error('Error artist')
    }
})
  .then((data)=>{
    console.log(data)
    appendTracks (data) 
  })

  .catch((err)=>{
    console.log(err)
  })

}

const appendTracks =  function (datatracks){
    appendArtist
  tracklist.forEach(track => {
    trackSelector += 1
    appendAlbum.innerHTML += `<div class="col-7 d-flex align-items-center"><span class="px-3 text-light">${trackSelector}</span>
    <div>
      <p class="text-light fw-bold mb-0">${track.title}</p>
      <p class="mb-0">${track.artist.name}</p>
    </div>
  </div>
  <div class="col-4 d-flex align-items-center">${track.rank}</div>
  <div class="col-1 d-flex align-items-center flex-row-reverse pe-5"></div>`  
  });
  
}

window.onload = () => {
  getArtist()
}


// {"id":412,"name":"Queen","link":"https://www.deezer.com/artist/412",
// "share":"https://www.deezer.com/artist/412?utm_source=deezer&utm_content=artist-412&utm_term=0_1684331188&utm_medium=web","picture":"https://api.deezer.com/artist/412/image",
// "picture_small":"https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/56x56-000000-80-0-0.jpg",
// "picture_medium":"https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/250x250-000000-80-0-0.jpg",
// "picture_big":"https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/500x500-000000-80-0-0.jpg",
// "picture_xl":"https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/1000x1000-000000-80-0-0.jpg",
// "nb_album":61,"nb_fan":10876960,"radio":true,"tracklist":"https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50","type":"artist"}