import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  /**
   * A function used to reroute to the 
   * catalogue page.
   */
  viewPokedex(): void{
    this.router.navigate(['/catalogue']);
  }
  /**
   * A function used to reroute to the 
   * trainer page.
   */
  viewTrainerPage(): void{
    this.router.navigate(['/trainer']);
  }
  /**
   * A function used to log out the current
   * user. It does so by clearing the localstorage
   * and rerouting to the home page.
   */
  logOutUser(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
