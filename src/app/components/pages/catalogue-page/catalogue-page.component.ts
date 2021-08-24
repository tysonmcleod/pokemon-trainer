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
    console.log(localStorage.getItem('pokemon'))
  }

  get pokedex(): any[] {
    return this.getPokemon.getPokedex();
  }
  
  isCaught(name:string): boolean{
    return true;
  }

}

