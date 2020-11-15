import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pro-homepage',
  templateUrl: './pro-homepage.component.html',
  styleUrls: ['./pro-homepage.component.css']
})
export class ProHomepageComponent implements OnInit {

  opened: boolean;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.opened = false;
  }


}
