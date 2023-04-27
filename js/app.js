const marvel={
    render:()=>{
        // const urlAPI='https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b2dfbab623af21346250392176e9b972&hash=b9ba02a8c71af91c7fb810fd38286e8a';
        // const urlAPI='https://gateway.marvel.com:443/v1/public/characters/77/comics?ts=1&apikey=b2dfbab623af21346250392176e9b972&hash=b9ba02a8c71af91c7fb810fd38286e8a';
        // const urlAPI='https://gateway.marvel.com:443/v1/public/characters/9/events?ts=1&apikey=b2dfbab623af21346250392176e9b972&hash=b9ba02a8c71af91c7fb810fd38286e8a';
        const urlAPI='https://gateway.marvel.com:443/v1/public/creators?ts=1&apikey=b2dfbab623af21346250392176e9b972&hash=b9ba02a8c71af91c7fb810fd38286e8a'
        const container=document.querySelector('#marvel-row');
        let contentHTML= '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json)=>{
            // console.log(json,'RES.JSON')
             for(const hero of json.data.results){
                  let urlHero= hero.urls[0].url;
                  contentHTML+= `
                  <div class="col-md-4">
                      <a href="${urlHero}" target="_blank">
                          <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.firstName}" class="img-thumbnail">
                      </a>
                      <h3 class="title">${hero.firstName}</h3>
                  </div>`;
              }
              container.innerHTML=contentHTML;
        })

    }
};

marvel.render();