import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HomeComponent } from './components/home/home.component';
import { UserCatalogComponent } from './components/user-catalog/user-catalog.component';
import { AuthGuard } from 'src/app/auth/auth.guard'
const routes: Routes = [
  { path: "",  component : HomeComponent},
  { path: "admin", component: CatalogComponent, canActivate: [AuthGuard]},
  { path: "catalog", component: UserCatalogComponent},
  { path: "Product", component: ProductComponent},
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
