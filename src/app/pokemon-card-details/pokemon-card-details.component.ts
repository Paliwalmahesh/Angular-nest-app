import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonModel, PokemonPowerModel } from '../model/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-card-details',
  templateUrl: './pokemon-card-details.component.html',
  styleUrls: ['./pokemon-card-details.component.css'],
})
export class PokemonCardDetailsComponent {
  pokemon: PokemonModel;
  pokemonPowerModel: PokemonPowerModel[];
  // powers=
  id: string;
  setError: boolean = false;
  errorMsg: string = '';

  constructor(
    private pokemonServices: PokemonService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.pokemon = {
      name: '',
      imageUrl: '',
    };
    this.pokemonPowerModel = [];
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit() {
    this.pokemonServices.getPowerId(this.id).subscribe({
      next: (response) => {
        this.pokemonPowerModel = response;
        console.log(this.pokemonPowerModel);
      },
      error: (error) => {
        this.setError = true;
        this.errorMsg = error.message;
      },
    });
    this.pokemonServices.getPokemon(this.id).subscribe({
      next: (response) => {
        this.pokemon = response;
      },
      error: (error) => {
        this.setError = true;
        this.errorMsg = error.message;
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
