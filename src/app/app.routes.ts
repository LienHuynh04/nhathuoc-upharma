import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { authGuard, authChildGuard } from './core/guards/auth.guard';

@Component({
  standalone: true,
  template: ''
})
export class EmptyViewComponent {}

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authChildGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: EmptyViewComponent
      },
      {
        path: 'product-list',
        loadComponent: () => import('./features/goods/product-list/product-list.component').then(m => m.ProductListComponent)
      },
      {
        path: 'feature/hh_1',
        loadComponent: () => import('./features/goods/product-list/product-list.component').then(m => m.ProductListComponent)
      },
      {
        path: 'inventory',
        loadComponent: () => import('./features/goods/inventory/inventory.component').then(m => m.InventoryComponent)
      },
      {
        path: 'feature/hh_4',
        loadComponent: () => import('./features/goods/inventory/inventory.component').then(m => m.InventoryComponent)
      },
      {
        path: 'inventory-shop',
        loadComponent: () => import('./features/goods/inventory-shop/inventory-shop.component').then(m => m.InventoryShopComponent)
      },
      {
        path: 'feature/hh_6',
        loadComponent: () => import('./features/goods/inventory-shop/inventory-shop.component').then(m => m.InventoryShopComponent)
      },
      {
        path: 'feature/:code',
        loadComponent: () => import('./features/common/feature-view/feature-view.component').then(m => m.FeatureViewComponent)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'pos',
        loadComponent: () => import('./features/sales/pos/pos.component').then(m => m.PosComponent)
      },
      {
        path: 'price-setup',
        loadComponent: () => import('./features/policy/price-setup/price-setup.component').then(m => m.PriceSetupComponent)
      },
      {
        path: 'warehouse-setup',
        loadComponent: () => import('./features/warehouse/warehouse-setup/warehouse-setup.component').then(m => m.WarehouseSetupComponent)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];
