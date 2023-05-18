const urlSite = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const search = () => {
  let searchResult = document.getElementById("searchBar");
  let searchValue = searchResult.value;

  fetch(urlSite + searchValue)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nella fetch");
      }
    })

    .then((data) => {
      console.log(data);

      let contentToFill = document.getElementById("sfogliaTutto");
      contentToFill.innerHTML = "";
      let songResults = data.data;
      songResults.forEach((element) => {
        let cardTemplate = `
                <div class="col-md-12 mb-4">
                <div class="row my-1 search-hover">
                  <div class="col-md-12">
                    <div class="card bg-transparent text-light mb-3 border-0">
                      <div class="row g-0">
                        <div class="col-md-1">
                        <a class="text-decoration-none" href="album.html?albumId=${element.album.id}"><img src=${
                          element.album.cover
                        } class="img-fluid rounded-1 ms-2 mt-3" alt="cover canzone"></a>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title"><a class="text-decoration-none text-light" href="album.html?albumId=${element.album.id}">${element.title}</a></h5>
                            <p class="card-text text-secondary"><a class="text-decoration-none text-light underline-me" href="artist.html?artistId=${element.artist.id}">${
                              element.artist.name
                            }</a></p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="card-body">
                            <p class="text-secondary">${Math.floor(
                              element.duration / 60
                            )}:${element.duration % 60}</p>
                          </div>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
              </div>               
                `;

        contentToFill.innerHTML += cardTemplate;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

let barraDiRicerca = document.getElementById("searchBar");
barraDiRicerca.addEventListener("search", function (e) {
  e.preventDefault();
  search();
});
