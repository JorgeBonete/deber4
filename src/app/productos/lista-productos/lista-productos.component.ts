import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Producto';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[]; // Ajusta el tipo según la estructura de tu producto

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productos = this.productService.getProductos();
  }
}
