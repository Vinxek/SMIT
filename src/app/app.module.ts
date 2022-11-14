import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SalesComponent } from './sales/sales.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [

  {path:'', component:DashboardComponent},
  {path:'inventory', component:InventoryComponent},
  {path:'sales', component:SalesComponent},
  {path:'products', component:ProductComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    SalesComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
