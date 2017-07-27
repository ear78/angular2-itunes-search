import { Component, OnInit, Injectable } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, Routes } from '@angular/router';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {
                this.route.params.subscribe( params => console.log(params));
              }

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
