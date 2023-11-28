import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-ingresar-producto',
  templateUrl: './ingresar-producto.component.html',
  styleUrls: ['./ingresar-producto.component.css'],
})
export class IngresarProductoComponent {
  nuevoProducto: any = {}; // Ajusta el tipo según la estructura de tu producto

  constructor(private productService: ProductService) {}

  agregarProducto(): void {
    this.productService.agregarProducto(this.nuevoProducto);
    this.nuevoProducto = {}; // Limpiar el formulario después de agregar
  }
}