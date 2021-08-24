import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonService {
  private BASE_URL = 'https://pokeapi.co/api/v2/';
  private ORIGINAL_POKEDEX_BASE_URL =
    'https://pokeapi.co/api/v2/pokemon?limit=151';
  private SPRITE_URL =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  private pokedex: any[] = [];

  constructor(private http: HttpClient) {}

  /**
   * This function fetches the original 151 pokemon from the api
   * and stores the data in a local variable pokedex for usage 
   * in the application. 
   */
  
  public getPokemonData() {
    this.http.get<any>(this.ORIGINAL_POKEDEX_BASE_URL).subscribe(
      (response: any) => {
        console.log('success');
        this.pokedex.push(this.processData(response.results));
      },
      (error) => console.log('error occured', error)
    );
  }

  /**
   * This function serves as a helper function to 
   * transform fetched data and include an image 
   * for every pokemon.
   * @param data 
   * @returns an object consiting of a pokemon name 
   * and image. 
   */
  public processData(data: any) {
    let dataTransform: any[] = [];
    let i: number = 0;
    for (let item of data) {
      dataTransform.push({
        data: data[i],
        image_url: this.SPRITE_URL + (i + 1) + '.png',
      });
      ++i;
    }
    return dataTransform;
  }

  /**
   * This function is used to retrive the fetched
   * pokemon. 
   * @returns an object containing the pokemon name 
   * and respective sprite url. 
   */
  public getPokedex() {
    return this.pokedex[0];
  }

}
