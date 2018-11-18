// mport {Routes,RouterModule} from '@angular/router';
// import { AddEmpComponent } from './add-emp/add-emp.component';
// import { ListEmpComponent } from './list-emp/list-emp.component';
// import { LoginComponent } from './login/login.component';
// import { EditableColumn } from 'primeng/table';
// const routes:Routes=[
//     {
//         path:'',component:LoginComponent
//     },
//     {
//         path:'app-login',component:LoginComponent
//     },
//     {
// path:'app-edit-emp',component:EditableColumn
//     },
// {
//     path:'app-add-emp',component:AddEmpComponent
// },
// {
//     path:'app-list-emp',component:ListEmpComponent
// }
// ];
// export const routing=RouterModule.forRoot(routes);i

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CheckoutComponent } from "./checkout/checkout.component";
import { OrderConfirmationComponent } from "./order-confirmation/order-confirmation.component";
import { StoreFrontComponent } from "./store-front/store-front.component";
import { PopulatedCartRouteGuard } from "./route-guards/populated-cart.route-gaurd";

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
                canActivate: [PopulatedCartRouteGuard],
                component: CheckoutComponent,
                path: "checkout"
            },
            {
                canActivate: [PopulatedCartRouteGuard],
                component: OrderConfirmationComponent,
                path: "confirmed"
            },
            {
                component: StoreFrontComponent,
                path: "**"
            }])
    ]
})
export class AppRoutingModule { }
