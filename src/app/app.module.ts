import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SalesComponent } from './sales/sales.component';
import { ProductComponent } from './product/product.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


const appRoutes:Routes = [

  {path:'', component:DashboardComponent},
  {path:'inventory', component:InventoryComponent},
  {path:'sales', component:SalesComponent},
  {path:'products', component:ProductComponent},
  {path:'customers', component:CustomersComponent},
  {path:'receipts', component:ReceiptsComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    SalesComponent,
    ProductComponent,
    ReceiptsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
