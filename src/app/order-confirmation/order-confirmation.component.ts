// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-order-confirmation',
//   templateUrl: './order-confirmation.component.html',
//   styleUrls: ['./order-confirmation.component.css']
// })
// export class OrderConfirmationComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../service/shopping-cart.service";

@Component({
  selector: "app-order-confirmation",
  templateUrl: "./order-confirmation.component.html"
})
export class OrderConfirmationComponent implements OnInit {
  public constructor(private shoppingCartService: ShoppingCartService) {}

  public ngOnInit(): void {
    this.shoppingCartService.empty();
  }
}
