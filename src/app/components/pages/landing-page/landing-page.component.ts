import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
 

  constructor(private router: Router) {}

  /**
   * This function is used to add a users name to the 
   * localstorage. If the name is valid, a user is
   * redirected to the home page. If not, an alert is shown.
   * @param event 
   */
  addName(event: any): void {
    event.preventDefault();
    if (
      event.target.name.value != '' &&
      event.target.name.value.match(/^[a-zA-Z-]+$/)
    ) {
      localStorage.setItem('name', event.target.name.value);
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
