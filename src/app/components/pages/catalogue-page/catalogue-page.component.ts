import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GetPokemonService } from 'src/app/services/get-pokemon.service';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css']
})
export class CataloguePageComponent implements OnInit {
  

  constructor(private router: Router, private getPokemon: GetPokemonService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('name')){
      this.router.navigate(['/']);
    }
    this.getPokemon.getPokemonData();
  }
  /**
   * This is used to get the fetched pokemon 
   * from the GetPokemonService for usage in 
   * the catalogue component.
   */
  get pokedex(): any[] {
    return this.getPokemon.getPokedex();
  }
  
  /**
   * A function used to determine if a pokemon has
   * been caught or not. Does so by checking a users
   * localstorage.
   * @param name a pokemon's name
   * @returns true if a pokemon is caught, else false.
   */
  isCaught(name:string): boolean{
    if(localStorage.getItem('caughtPokemon')?.includes(JSON.stringify(name))){
      return true;
    }
    return false;
  }

  /**
   * A function used to catch a pokemon.
   * The caught pokemon is appended to the user's localstorage.
   * @param name name of the pokemon
   * @param image_url image url for the respective pokemon's sprite
   */
  catchPokemon(name:string, image_url:string): void {
    if(!localStorage.getItem('caughtPokemon')){
      localStorage.setItem('caughtPokemon', JSON.stringify(name) + ' ' + JSON.stringify(image_url) )
    }else{
      localStorage.setItem('caughtPokemon', localStorage.getItem("caughtPokemon")+ ' ' + JSON.stringify(name) + ' ' + JSON.stringify(image_url))
    }
  }

}

