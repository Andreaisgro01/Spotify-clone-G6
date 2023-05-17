const urlSite = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const search = () => {
    let searchResult = document.getElementById("searchBar");
    let searchValue = searchResult.value;

    fetch(urlSite + searchValue)
        .then((res) => {
            if (res.ok) {
                return res.json()        
        }else{
            throw new Error("Errore nella fetch");
        }
    })

        .then((data) => {
            console.log(data)
            
            let contentToFill = document.getElementById("sfogliaTutto")
            contentToFill.innerHTML = "";
            let songResults = data.data
            songResults.forEach(element => {
                let cardTemplate = `
                <div class="col-md-12 mb-4">
                <div class="row my-1">
                  <div class="col-md-12">
                    <div class="card bg-transparent text-light mb-3">
                      <div class="row g-0">
                        <div class="col-md-1">
                        <img src=${element.album.cover} class="img-fluid" alt="cover canzone">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text text-secondary">${element.artist.name}</p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="card-body">
                            <p class="text-secondary">${element.duration}</p>
                          </div>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
              </div>               
                `
        
                contentToFill.innerHTML += cardTemplate;
            }); 


        })
        .catch((err) => {
            console.log(err);
        })    
}


let barraDiRicerca = document.getElementById("searchBar");
barraDiRicerca.addEventListener("search", search())

