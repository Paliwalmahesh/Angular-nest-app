export class PokemonPowerModel {
  id: number = 0;
  name: string = '';
  pokemonId: string = '';
}
export class PokemonModel {
  id?: number = 0;
  name: string = '';
  imageUrl: string = '';
}
export class pokemonCreate {
  name: string = '';
  power: string[] = ['0'];
  imageUrl: string = '';
}
