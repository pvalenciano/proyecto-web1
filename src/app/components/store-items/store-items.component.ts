import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css']
})
export class StoreItemsComponent implements OnInit {

  @Input() items:any;
  constructor() { }

  ngOnInit() {
    console.log("item: ",this.items.name);
  }

}
