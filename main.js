let pokeData
let pokemon
let pokeID
let pokeContainer
function fetchKantoPokemon () { 
fetch ('https://pokeapi.co/api/v2/pokemon?limit=12') 
  .then (response => response.json ()) 
  .then (function (allpokemon) { 
  allpokemon.results .forEach (function ( 
    pokemon 
) { 
fetchPokemonData (pokemon); 
  }) 
}) 
}
fetchKantoPokemon ()

function fetchPokemonData (pokemon) { 
let url = pokemon.url
  fetch (url) 
  .then (response => response.json ()) 
  .then (function (pokeData) { 
  console.log (pokeData)
      renderPokemon (pokeData, pokemon)
      createPokeImage (pokeID, pokeContainer, pokeData)
  }) 

}
  
function renderPokemon (pokeData, pokemon) { 
    
      
    console.log(1);
let allPokemonContainer = document.getElementById('poke-container'); 
    console.log(allPokemonContainer)
    pokeContainer = document.createElement('div');
    pokeContainer.classList.add('class-poke')
    let atr= document.createAttribute("id");
    atr.value = `#${pokeData.id}`;
    pokeContainer.setAttributeNode(atr);
    pokeContainer.onclick = function() {
        // console.log(pokeData.id);
          

          
         let id = pokeData.id
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
                
             let pokeOneName =document.createElement('h3'); 
             pokeOneName.innerText = data.name;                
             pokeOneName.classList.add('active')
//             pokeOneName.classList.nextSibling.remove('active')
             let pokeOneNumber = document.createElement('p'); 
             pokeOneNumber.innerText = `# ${pokeData.id}`; 
             let pokeOneTypes = document.createElement('ul'); 
             Info.append(pokeOneName, pokeOneNumber, pokeOneTypes)
             createTypesOne(data.types, pokeOneTypes);
            });
                     
     
  
        let Info = $('#stats-container')
        Info.css({
            display: 'block'
        })

    }
    function createTypesOne (types, ul) { 
  types.forEach (function (type) { 
  let typeLiOne = document.createElement ('li'); 
  typeLiOne.innerText = type ['type'] ['name']; 
  ul.append (typeLiOne ) 
  }) 
}

    console.log(pokeContainer)
    allPokemonContainer.appendChild(pokeContainer); 

let pokeName = document.createElement('h4'); 
pokeName.innerText = pokeData.name; 
let pokeNumber = document.createElement('p'); 
pokeNumber.innerText = `# ${pokeData.id}`; 
let pokeTypes = document.createElement('ul'); 
pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
createTypes(pokeData.types, pokeTypes); 
}

 console.log(2)
function createTypes (types, ul) { 
  types.forEach (function (type) { 
  let typeLi = document.createElement ('li'); 
  typeLi.innerText = type ['type'] ['name']; 
  ul.append (typeLi ) 
  }) 
}
function createPokeImage (pokeID, pokeContainer, pokeData) {
  pokeID = pokeData.id
    console.log(pokeData.id)
  let pokeImage = document.createElement('img') 
  pokeImage.src = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png ` 
  pokeContainer.append(pokeImage); 

}
  
 
