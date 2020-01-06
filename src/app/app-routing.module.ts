import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CategoryComponent } from './category/category.component';
import { BuComponent } from './dep/bu/bu.component';

const routes: Routes = [
  {path:"overview",component:OverviewComponent},
  {path:"supplier",component:SupplierComponent},
  {path:"category",component:CategoryComponent},
  {path:"bu",component:BuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
