import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  pokemonCreate,
  PokemonModel,
  PokemonPowerModel,
} from './../model/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = 'http://172.22.64.1:3000/pokemon';

  constructor(private http: HttpClient) {}
  public getPokemons() {
    // console.log('pkem' +this.http.get<any>(this.baseUrl));
    return this.http.get<PokemonModel[]>(this.baseUrl);
  }
  public getPokemon(id: string) {
    return this.http.get<PokemonModel>(this.baseUrl + '/' + id);
  }

  public getPowerId(id: string) {
    return this.http.get<PokemonPowerModel[]>(
      this.baseUrl + '/' + id + '/powers'
    );
  }
  public getPower() {
    return this.http.get<[]>("http://192.168.56.1:3000//powers'");
  }
  savePokemon(pokemon: pokemonCreate) {
    return this.http.post<pokemonCreate[]>(this.baseUrl, pokemon);
  }
}
