import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu/menu.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { IngresarProductoComponent } from './productos/ingresar-producto/ingresar-producto.component';
import { ModificarProductoComponent } from './operaciones/modificar-producto/modificar-producto.component';
import { EliminarProductoComponent } from './operaciones/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'productos/lista', component: ListaProductosComponent },
  { path: 'productos/ingresar', component: IngresarProductoComponent },
  { path: 'operaciones/modificar', component: ModificarProductoComponent },
  { path: 'operaciones/eliminar', component: EliminarProductoComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
