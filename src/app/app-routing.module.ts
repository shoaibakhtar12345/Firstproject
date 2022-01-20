import { AboutComponent } from './pages/about/about.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ProductComponent } from './pages/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'customer',component:CustomerComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
