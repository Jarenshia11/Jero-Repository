// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule} from '@angular/core';
// import {LoginComponent} from './login/login.component'
// import { AppComponent } from './app.component';
// import {FormsModule} from '@angular/forms';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {RouterModule} from '@angular/router';
// import { RepeatDirective } from './repeat.directive';
// import { MessageDirective } from './message.directive';
// import {ListEmpComponent} from './list-emp/list-emp.component';
// import {TableModule} from 'primeng/table';
// import { ModalComponentComponent } from './modal-component/modal-component.component';
// import {ModalService} from './sevice/modal.service';
// import { CheckoutComponent } from './checkout/checkout.component';
// import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
// import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
// import { StoreFrontComponent } from './store-front/store-front.component';
// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RepeatDirective,
//     MessageDirective,
//     ListEmpComponent,
//     ModalComponentComponent,
//     CheckoutComponent,
//     OrderConfirmationComponent,
//     ShoppingCartComponent,
//     StoreFrontComponent
//   ],
//   imports: [
//     BrowserModule,    
//     BrowserAnimationsModule,
//     FormsModule,
//     RouterModule,
//     TableModule
//   ],
  
//   providers: [
//     ModalService
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule {
 
//   constructor()
//   {
    
//  }
 
// }
// export class Employee
//  {
//    id?:number;
//    emp_name?:string;
//    emp_age?:number;
//    emp_salary?:number;
   

   
//  }

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CheckoutComponent } from "./checkout/checkout.component";
import { OrderConfirmationComponent } from "./order-confirmation/order-confirmation.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { StoreFrontComponent } from "./store-front/store-front.component";
import { PopulatedCartRouteGuard } from "./route-guards/populated-cart.route-gaurd";
import { DeliveryOptionsDataService } from "./service/delivery-options.service";
import { ProductsDataService } from "./service/products.service";
import { ShoppingCartService } from "./service/shopping-cart.service";
import { LocalStorageServie, StorageService } from "./service/storage.service";
import { ProductsListComponent } from './products-list/products-list.component';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    StoreFrontComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataViewModule,
    DialogModule,
    PanelModule
  ],
  providers: [
    ProductsDataService,
    DeliveryOptionsDataService,
    PopulatedCartRouteGuard,
    LocalStorageServie,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ProductsDataService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ]
})
export class AppModule { }
