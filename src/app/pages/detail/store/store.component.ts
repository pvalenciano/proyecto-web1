import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  recentItem = "None";
  public cart = [];
  public openCart:boolean=false;
  // public itemList = ['item 1', 'item 2', 'item 3', 'item 4', 
  // 'item 5', 'item 6', 'item 7', 'item 8',
  // 'item 9', 'item 10', 'item 11', 'item 12'];

  public itemList = [
    {name:'POLAROID1', photo:'foto1', des:'descripcion item'},
    {name:'POLAROID2', photo:'foto2', des:'descripcion item'},
    {name:'POLAROID3', photo:'foto3', des:'descripcion item'},
    {name:'POLAROID4', photo:'foto4', des:'descripcion item'},
    {name:'POLAROID5', photo:'foto5', des:'descripcion item'},
    {name:'POLAROID6', photo:'foto6', des:'descripcion item'}
  ];
  constructor() { }


  ngOnInit() {
    console.log("cart: ",this.cart)
  }
  selectedItem(item) {
    this.recentItem = item;
    this.cart.push(item);
    alert(item + ' was added to cart');
  }
  public openPopup():void{
    this.openCart=!this.openCart;
  }
}
