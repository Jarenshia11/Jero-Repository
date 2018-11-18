// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { CartItem } from "../models/car-item";
import { DeliveryOption } from "../models/delivery-option";
import { Product } from "../models/product";
import { ShoppingCart } from "../models/shopping-cart";
import { DeliveryOptionsDataService } from "../service/delivery-options.service";
import { ProductsDataService } from "../service/products.service";
import { ShoppingCartService } from "../service/shopping-cart.service";
import { Observable,Subscription } from "rxjs";


interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: "app-checkout",
  styleUrls: ["./checkout.component.css"],
  templateUrl: "./checkout.component.html"
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public deliveryOptions: Observable<DeliveryOption[]>;
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;

  private products: Product[];
  private cartSubscription: Subscription;

  public constructor(private productsService: ProductsDataService,
                     private deliveryOptionService: DeliveryOptionsDataService,
                     private shoppingCartService: ShoppingCartService) {
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public setDeliveryOption(option: DeliveryOption): void {
    this.shoppingCartService.setDeliveryOption(option);
  }

  public ngOnInit(): void {
    this.deliveryOptions = this.deliveryOptionService.all();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.productsService.all().subscribe((products) => {
        this.products = products;
        this.cartItems = cart.items
                           .map((item) => {
                              const product = this.products.find((p) => p.id === item.productId);
                              return {
                                ...item,
                                product,
                                totalCost: product.price * item.quantity };
                           });
      });
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
