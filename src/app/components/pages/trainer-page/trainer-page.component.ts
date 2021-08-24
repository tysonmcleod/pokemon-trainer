import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {
  public userPokemon: {name: string, image_url: string}[] = [];
  constructor(private router: Router) { }

  showPokemon(): void{
    if(localStorage.getItem('caughtPokemon')){
      let pokemonList = localStorage.getItem('caughtPokemon')?.split(" ");
      if(pokemonList){
        for(let i = 0; i <  pokemonList?.length; ++i){
          let pokemon = {name: JSON.parse(pokemonList[i]), image_url: JSON.parse(pokemonList[i+1])};
          this.userPokemon.push(pokemon);
          ++i
        }
      }  
    }
  }


  ngOnInit(): void {
    if(!localStorage.getItem('name')){
      this.router.navigate(['/']);
    }else{
      this.showPokemon();
    }
  }

  logOutUser(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
