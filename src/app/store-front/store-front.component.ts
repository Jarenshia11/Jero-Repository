
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ShoppingCart } from "../models/shopping-cart";
import { ProductsDataService } from "../service/products.service";
import { ShoppingCartService } from "../service/shopping-cart.service";
import { Observable,Observer } from "rxjs";


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-store-front",
  styleUrls: ["./store-front.component.css"],
  templateUrl: "./store-front.component.html"
})
export class StoreFrontComponent implements OnInit {
  public products: Observable<Product[]>;

  public constructor(private productsService: ProductsDataService,
                     private shoppingCartService: ShoppingCartService) {
  }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product): void {
    this.shoppingCartService.addItem(product, -1);
  }

  public productInCart(product: Product): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
                      .get()
                      .subscribe((cart) => {
                        obs.next(cart.items.some((i) => i.productId === product.id));
                        obs.complete();
                      });
      sub.unsubscribe();
    });
  }

  public ngOnInit(): void {
    this.products = this.productsService.all();
  }
}
