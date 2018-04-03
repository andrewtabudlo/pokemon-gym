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

function render(trainer) {
    if (trainer == mbison) { 
      for (i = 0; i < trainer.pokemon.length; i++) {
        $('#pokemonPic' + (i+1)).attr('src',trainer.pokemon[i].image);
        $('#cardTitle' + (i+1)).html('#' + trainer.pokemon[i].id + ' ' + trainer.pokemon[i].name);
        $('#statsList' + (i+1)).html(`<li class='collection-item'>HP: ${trainer.pokemon[i].hp}</li><li class='collection-item'>Attack: ${trainer.pokemon[i].attack}</li><li class='collection-item'>Defense: ${trainer.pokemon[i].defense}</li>`);
        trainer.pokemon[i].abilities.forEach(function(ability) {
          $('#abilitiesList' + (i+1)).append(`<li class='collection-item'>${ability}</li>`);
        });
        $('#miscList' + (i+1)).html(`<li class='collection-item'>Height: ${trainer.pokemon[i].height}</li><li class='collection-item'>Weight: ${trainer.pokemon[i].weight}</li>`);
    }
      } else if (trainer == urien) {
      for (i = 3; i < (trainer.pokemon.length - 3); i++) {
        $('#pokemonPic' + i).attr('src',trainer.pokemon[(i-3)].image);
        $('#cardTitle' + i).html('#' + trainer.pokemon[(i-3)].id + ' ' + trainer.pokemon[(i-3)].name);
        $('#statsList' + i).html(`<li class='collection-item'>HP: ${trainer.pokemon[(i-3)].hp}</li>`);
        trainer.pokemon[(i-3)].abilities.forEach(function(ability) {
          $('#abilitiesList' + i).append(`<li class='collection-item'>${ability}</li>`);
        });
        $('#miscList' + i).html(`<li class='collection-item'>Height: ${trainer.pokemon[(i-3)].height}</li><li class='collection-item'>Weight: ${trainer.pokemon[(i-3)].weight}</li>`);
    }
      } else {
      console.log('something went wrong');
  } 
}


// get pokemon data
// add your pokemon and trainer here to call your pokemon
$.when(getPokemon(384, urien),getPokemon(149, urien),getPokemon(373, urien),getPokemon(18, mbison),getPokemon(31, mbison), getPokemon(24, mbison)).done(render(mbison),render(urien));
