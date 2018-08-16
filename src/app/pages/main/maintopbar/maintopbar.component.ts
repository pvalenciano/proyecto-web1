import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-maintopbar',
  templateUrl: './maintopbar.component.html',
  styleUrls: ['./maintopbar.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class MaintopbarComponent implements OnInit {

  constructor( public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
