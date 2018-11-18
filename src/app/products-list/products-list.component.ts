import { Component, OnInit } from '@angular/core';
import {ProductsDataService} from '../service/products.service';
import {Product} from '../models/product';
import {SelectItem} from '../models/SelectedItem';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
products:Product[];
selectedProduct:Product;
displayDialog:boolean;
sortOptions:SelectItem[];
sortKey:string;
sortField:string;
sortNumber:number;
sortOrder:number;
  constructor(private product:ProductsDataService) { }

  ngOnInit() {
    this.product.getProducts().then(x=>this.products=x);
    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Brand', value: 'brand'}
  ];
  }
  selectCar(event: Event, product: Product) {
    this.selectedProduct = product;
    this.displayDialog = true;
    event.preventDefault();
}

onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

onDialogHide() {
    this.selectedProduct = null;
}

}
