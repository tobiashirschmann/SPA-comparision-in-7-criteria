import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AccountComponent } from './account/account.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

const routes: Routes = [
  { path: 'orders-component', component: OrdersComponent },
  { path: 'account-component', component: AccountComponent },
  { path: 'recommendations-component', component: RecommendationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

