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

  get pokedex(): any[] {
    return this.getPokemon.getPokedex();
  }
  
  isCaught(name:string): boolean{
    if(localStorage.getItem('caughtPokemon')?.includes(JSON.stringify(name))){
      return true;
    }
    return false;
  }

  catchPokemon(name:string, image_url:string): void {
    if(!localStorage.getItem('caughtPokemon')){
      localStorage.setItem('caughtPokemon', JSON.stringify(name) + ' ' + JSON.stringify(image_url) )
    }else{
      localStorage.setItem('caughtPokemon', localStorage.getItem("caughtPokemon")+ ' ' + JSON.stringify(name) + ' ' + JSON.stringify(image_url))
    }
  }

}

