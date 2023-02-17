import { Component, Input } from '@angular/core';
import { PokemonModel, PokemonPowerModel } from '../model/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemon: PokemonModel = {
    name: '',
    imageUrl: '',
  };
  constructor() {
    console.log('[pokemon' + this.pokemon);
    console.log(this.pokemon);
  }
}
