import { Component, OnInit} from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit { 
  pokemonList: Pokemon[] = POKEMONS; // affectation avec déclaration
  //pokemonList = POKEMONS; // affectation sans déclaration
  
  constructor() {
    // Il ne faut JAMAIS initialiser des trucs ici 
  }
  
  ngOnInit(){
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[8]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }

  // Video Youtube: 1:27:51 2) Développer vos templates avec ES6 Les templates

}

