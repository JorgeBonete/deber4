import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productos: any[] = []; // Ajusta el tipo según la estructura de tu producto

  getProductos(): any[] {
    return this.productos;
  }

  agregarProducto(producto: any): void {
    this.productos.push(producto);
  }

  // Implementa métodos para modificar y eliminar productos según tus necesidades
}