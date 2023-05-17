let heartDecoration = document.getElementById('heart-tool');

heartDecoration.addEventListener("click", function () {
    if (heartDecoration.classList.contains("bi-heart")) {
      heartDecoration.classList.remove("bi-heart");
      heartDecoration.classList.add("bi-heart-fill");
      heartDecoration.innerHTML = `<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>`;
    } else {
      heartDecoration.classList.add("bi-heart");
      heartDecoration.classList.remove("bi-heart-fill");
      heartDecoration.innerHTML = `<path
          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
        />`;
    }
  });

  const ALBUM_URL =  "https://striveschool-api.herokuapp.com/api/deezer/album/"
let addressBarContent = new URLSearchParams(window.location.search)
let albumId = addressBarContent.get('albumId')
let appendAlbum = document.getElementById('append-album')



const getAlbum = () =>{
  fetch(ALBUM_URL + albumId)
  
  .then((res) => {
    console.log('RES', res)
    if (res.ok) {

        return res.json()
    } else {
        throw new Error('Error album')
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
  let tracklist = datatracks.tracks.data
  let trackSelector = 0 
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
  getAlbum()
}













// "album":{
//"id":331818647,
// "title":"Mercury - Acts 1 & 2","cover":"https://api.deezer.com/album/331818647/image","cover_small":"https://e-cdns-images.dzcdn.net/images/cover/7f7aae26b50cb046c872238b6a2a10c2/56x56-000000-80-0-0.jpg",
// "cover_medium":"https://e-cdns-images.dzcdn.net/images/cover/7f7aae26b50cb046c872238b6a2a10c2/250x250-000000-80-0-0.jpg"
// ,"cover_big":"https://e-cdns-images.dzcdn.net/images/cover/7f7aae26b50cb046c872238b6a2a10c2/500x500-000000-80-0-0.jpg",
// "cover_xl":"https://e-cdns-images.dzcdn.net/images/cover/7f7aae26b50cb046c872238b6a2a10c2/1000x1000-000000-80-0-0.jpg","md5_image":"7f7aae26b50cb046c872238b6a2a10c2","tracklist":"https://api.deezer.com/album/331818647/tracks"
// ,"type":"album"},
// "type":"track"}