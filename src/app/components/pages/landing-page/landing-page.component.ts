import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  public caughtPokemon: string = 'pikachu';

  constructor(private router: Router) {}

  addName(event: any): void {
    event.preventDefault();
    if (
      event.target.name.value != '' &&
      event.target.name.value.match(/^[a-zA-Z-]+$/)
    ) {
      localStorage.setItem('name', event.target.name.value);
      localStorage.setItem('caughtPokemon', JSON.stringify(this.caughtPokemon));
      this.router.navigate(['/catalogue']);
    } else {
      alert('Enter a valid name');
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('name')) {
      this.router.navigate(['/catalogue']);
    }
  }
}
