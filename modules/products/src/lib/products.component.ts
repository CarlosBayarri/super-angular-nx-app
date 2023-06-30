import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'super-angular-nx-app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {}
