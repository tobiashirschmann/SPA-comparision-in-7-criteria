import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { AccountComponent } from './account/account.component';
import { OrderComponent } from './order/order.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    AccountComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
