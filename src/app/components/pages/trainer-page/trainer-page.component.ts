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

  /**
   * A function used to get a user's caught
   * pokemon. The function gets all the caught pokemon
   * from the user's localstorage and creates an object 
   * using the name and respective
   * image url for usage in the trainer-page. 
   */
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

}
