class Trainer {
  constructor(pokemon) {
    this.pokemon = [];
  }

  addPokemon(x) {
    this.pokemon.push(x);
      }
  all() {
    return this.pokemon;
  }
  get(key) {
    for (let i = 0; i < this.pokemon.length; i++) {
      if (this.pokemon[i].name === key) {
        return this.pokemon[i];
      }
    }
  }
}

class Pokemon {
  constructor(id,name,image,type,weight,height,hp,attack,defense,abilities) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.type = type;
      this.weight = weight;
      this.height = height;
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
      this.abilities = abilities;

  }
};
