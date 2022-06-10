import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./pages/catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'tshirts',
    loadChildren: () => import('./pages/tshirts/tshirts.module').then(m => m.TshirtsModule)
  },
  {
    path: 'mugs',
    loadChildren: () => import('./pages/mugs/mugs.module').then(m => m.MugsModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./pages/product-view/product-view.module').then(m => m.ProductViewModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart-page.module').then(m => m.CartPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
