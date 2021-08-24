import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {
  private BASE_URL = 'https://pokeapi.co/api/v2/';
  private ORIGINAL_BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  // update this 
  private SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  private pokedex: any[] = []; 

  constructor( private http: HttpClient ) { }
  
  // fetch the 151 pokemon (original pokedex)
  // store in pokedex array 
  public getPokemonData(){
    this.http.get<any>(this.ORIGINAL_BASE_URL).subscribe(
      (response:any) => {
        console.log('success');
        this.pokedex.push(this.process(response.results));
      },
      error => console.log('error occured', error)
    );
  }

  // fix images 
  public process(data:any){
    let dataTransform: any[] = [];
    let i: number = 0;
    for( let item of data){
      dataTransform.push({"data": data[i], "image_url": this.SPRITE_URL + (i+1) + ".png"});
      ++i;
    }
    return dataTransform;
  }

  // contains the fetched pokemon 
  public getPokedex(){
    return this.pokedex[0];
  }

  // add function to get one pokemon using string name
  
}
