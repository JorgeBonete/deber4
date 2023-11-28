import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';

@NgModule({
  declarations: [ModificarProductoComponent, EliminarProductoComponent],
  imports: [CommonModule, RouterModule],
  exports: [ModificarProductoComponent, EliminarProductoComponent],
})
export class OperacionesModule {}