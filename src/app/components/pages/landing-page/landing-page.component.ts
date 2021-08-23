import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  addName(event: any):void{
    if(event.target.name.value!="" && event.target.name.value.match(/^[a-zA-Z-]+$/)){
      localStorage.setItem('name', event.target.name.value);
      this.router.navigate(['/trainer']);
    }else{
      alert("Enter a valid name");
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('name')){
      this.router.navigate(['/trainer']);
    }
  }

}