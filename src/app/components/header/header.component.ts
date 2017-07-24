import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Way to get to links directly with router object and properties, usually not the easiest way, but a way to get directly to page with navigate prop.
  goHome(){
    this.router.navigate(['']);
  }

  //array can add to the url query, part = 'foo'
  goSearch(){
    let part = 'foo';
    this.router.navigate(['search', part, 'moo']);
  }

}
