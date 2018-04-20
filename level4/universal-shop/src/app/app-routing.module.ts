import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule',
  },
  {
    path: 'mens_outer',
    loadChildren: './department/department.module#DepartmentModule',
    data: { title: 'Men\'s Outerwear', url: '/assets/json/mens_outerwear.json' }
  },
  {
    path: 'ladies_outer',
    loadChildren: './department/department.module#DepartmentModule',
    data: { title: 'Ladies Outerwear', url: '/assets/json/ladies_outerwear.json' }
  },
  {
    path: 'mens_tshirts',
    loadChildren: './department/department.module#DepartmentModule',
    data: { title: 'Men\'s T-Shirts', url: '/assets/json/mens_tshirts.json' }
  },
  {
    path: 'ladies_tshirts',
    loadChildren: './department/department.module#DepartmentModule',
    data: { title: 'Ladies T-Shirts', url: '/assets/json/ladies_tshirts.json' }
  },
  // HACK HACK : Get CLI to recognize Lazy Angular Elements Modules for building.
  {
    path: '__dont_go_here_1',
    loadChildren: './lazy-img/lazy-img.module#LazyImageModule',
  },
  {
    path: '__dont_go_here_2',
    loadChildren: './add-to-cart/add-to-cart.module#AddToCartModule',
  },
  {
    path: '__dont_go_here_3',
    loadChildren: './app.module#AppModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
