

// create new trainer
// TODO do this for your trainer the same way
let urien = new Trainer();
let mbison = new Trainer();

// get json and extract data to objects, then place in respective trainers
function getPokemon(id, trainer){
    return $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
    dataType: 'json',
    method: 'GET',
    })
    .done(function(data) {
        console.log(data);
        let types = [];
        let getTypes = function(){
            for (let i = 0; i < data.types.length; i++){
                types.push(data.types[i].type.name);
            }
        }
        getTypes();
        let abilities = [];
        let getAbilities = function(){
            for (let i = 0; i < data.abilities.length; i++){
                abilities.push(data.abilities[i].ability.name);
            }
        }
        getAbilities();
        let pokemon = new Pokemon(data.id,data.name,data.sprites.front_default,types,data.weight,data.height,data.stats[3].base_stat,data.stats[4].base_stat,data.stats[5].base_stat,abilities);
        trainer.addPokemon(pokemon);
    });
}

function render() {
			// unlock scrolling
			// $(document).unbind('scroll');
			// $('body').css({'overflow':'visible'});
			// place json data on page
      for (i = 0; i < mbison.pokemon.length; i++) {
        $('#pokemonPic' + (i+1)).attr('src',mbison.pokemon[i].image);
        $('#cardTitle' + (i+1)).html('#' + mbison.pokemon[i].id + ' ' + mbison.pokemon[i].name);
        $('#statsList' + (i+1)).html(`<li class='collection-item'>HP: ${mbison.pokemon[i].hp}</li><li class='collection-item'>Attack: ${mbison.pokemon[i].attack}</li><li class='collection-item'>Defense: ${mbison.pokemon[i].defense}</li>`);
        mbison.pokemon[i].abilities.forEach(function(ability) {
          $('#abilitiesList' + (i+1)).append(`<li class='collection-item'>${ability}</li>`);
        });
        $('#miscList' + (i+1)).html(`<li class='collection-item'>Height: ${mbison.pokemon[i].height}</li><li class='collection-item'>Weight: ${mbison.pokemon[i].weight}</li>`);}
      for (i = 0; i < urien.pokemon.length; i++) {
        $('#pokemonPic' + (i+4)).attr('src',urien.pokemon[i].image);
        $('#cardTitle' + (i+4)).html('#' + urien.pokemon[i].id + ' ' + urien.pokemon[i].name);
        $('#statsList' + (i+4)).html(`<li class='collection-item'>HP: ${urien.pokemon[i].hp}</li><li class='collection-item'>Attack: ${mbison.pokemon[i].attack}</li><li class='collection-item'>Defense: ${mbison.pokemon[i].defense}</li>`);
        urien.pokemon[i].abilities.forEach(function(ability) {
          $('#abilitiesList' + (i+4)).append(`<li class='collection-item'>${ability}</li>`);
        });
        $('#miscList' + (i+4)).html(`<li class='collection-item'>Height: ${urien.pokemon[i].height}</li><li class='collection-item'>Weight: ${urien.pokemon[i].weight}</li>`);}
}


// get pokemon data
// add your pokemon and trainer here to call your pokemon
$.when(getPokemon(18, mbison),getPokemon(31, mbison), getPokemon(24, mbison),getPokemon(384, urien),getPokemon(149, urien),getPokemon(373, urien)).done(render);
