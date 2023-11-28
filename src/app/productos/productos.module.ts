import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { IngresarProductoComponent } from './ingresar-producto/ingresar-producto.component';

@NgModule({
  declarations: [ListaProductosComponent, IngresarProductoComponent],
  imports: [CommonModule, RouterModule],
  exports: [ListaProductosComponent, IngresarProductoComponent],
})
export class ProductosModule {}