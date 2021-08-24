import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {
  
  public caughtPokemon: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('name')){
      this.router.navigate(['/']);
    }
    localStorage.setItem('pokemon', JSON.stringify(this.caughtPokemon));
  }

  logOutUser(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
