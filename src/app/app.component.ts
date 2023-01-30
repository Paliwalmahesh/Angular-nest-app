import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PokemonModel } from './model/pokemon.model';
import { PokemonService } from './services/pokemon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Incubyte';

  allPokemon: PokemonModel[];
  pokemons: PokemonModel[] = [];
  pokemonform: FormGroup;
  setAlert: boolean = false;
  setError: boolean = false;
  errorMsg: string = '';
  constructor(
    private fb: FormBuilder,
    private pokemonServices: PokemonService
  ) {
    this.pokemonform = fb.group({});
    this.allPokemon = [];
  }

  ngOnInit(): void {
    this.pokemonform = this.fb.group({
      name: this.fb.control('Abc'),
      speciality: this.fb.control('pi'),
      imageUrl: this.fb.control('hhtp'),
    });
    this.pokemonServices.getPokemons().subscribe({
      next: (response) => {
        this.pokemons = response;
      },
      error: (error) => {
        this.setError = true;
        this.errorMsg = error.message;
        // console.log(error);
      },
    });
  }

  public get name(): FormControl {
    return this.pokemonform.get('name') as FormControl;
  }
  public get speciality(): FormControl {
    return this.pokemonform.get('speciality') as FormControl;
  }
  public get imageUrl(): FormControl {
    return this.pokemonform.get('imageUrl') as FormControl;
  }

  clearForm() {
    this.name.setValue('');
    this.speciality.setValue('');
    this.imageUrl.setValue('');
  }

  setfalse() {
    this.setAlert = false;
    console.log(this.setAlert);
  }

  addPokemon() {
    let pokemonobj: PokemonModel = {
      name: this.name.value,
      speciality: this.speciality.value,
      imageUrl: this.imageUrl.value,
    };
    this.pokemonServices.savePokemon(pokemonobj).subscribe({
      next: (response: any) => {
        this.pokemons.unshift(response);
        // console.log(response);
        this.clearForm();
      },
      error: (error) => {
        this.setError = true;
        this.errorMsg = error.message;
      },
    });
    this.setAlert = true;
  }
}