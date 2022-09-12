import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: 'orders-component', component: OrdersComponent },
  { path: 'account-component', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

