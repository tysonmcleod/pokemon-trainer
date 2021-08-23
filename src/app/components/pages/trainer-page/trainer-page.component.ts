import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('name')){
      this.router.navigate(['/']);
    }
  }

}
