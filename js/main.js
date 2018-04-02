// create new trainer
let daenerys = new Trainer();
let jeddex = new Trainer();
// TODO do this for your trainer the same way

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

// get pokemon data
// add your pokemon and trainer here to call your pokemon
$.when(getPokemon(384, daenerys),getPokemon(149, daenerys),getPokemon(373, daenerys),getPokemon(18, jeddex),getPokemon(31, jeddex), getPokemon(24, jeddex)).done(render);
