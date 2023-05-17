const urlSite = "https://striveschool-api.herokuapp.com/api/deezer/search?q={query}";

const result = () =>{
    let contentToFill = document.getElementById("sfogliaTutto")
    contentToFill.innerHTML = "";
    
    
}


const search = () => {
    let searchResult = document.getElementById("searchBar");
    searchValue = searchResult.value;

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
            


            result();
            let songResults = data.data
            songResults.forEach(element => {
                let cardTemplate = `
                <div class="col-md-12 mb-4">
                <span class="h3 text-light">Canzoni</span>
                <div class="row my-1">
                  <div class="col-md-12">
                    <div class="card bg-transparent text-light mb-3">
                      <div class="row g-0">
                        <div class="col-md-1">
                        <img src=${songResults.album.cover_small} class="img-fluid" alt="cover canzone">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${songResults.title}</h5>
                            <p class="card-text text-secondary">${songResults.artist.name}</p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="card-body">
                            <p class="text-secondary">${songResults.duration}</p>
                          </div>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
              </div>               
                `

                contentToFill += cardTemplate;
            }); 


        })
        .catch((err) => {
            console.log(err);
        })
    

    

    
}

// search()

