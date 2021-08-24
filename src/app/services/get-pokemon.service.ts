import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {
  private BASE_URL = 'https://pokeapi.co/api/v2/';
  private ORIGINAL_BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  constructor( private http: HttpClient ) { }
  
  getPokemonData(){
    return this.http.get(this.ORIGINAL_BASE_URL);
  }
  
}
