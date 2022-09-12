import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';

import { AccountComponent } from './account/account.component';
import { OrderComponent } from './order/order.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { StoreModule } from '@ngrx/store';
import countReducer from './reducers/count.reducer';


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
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({count: countReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
