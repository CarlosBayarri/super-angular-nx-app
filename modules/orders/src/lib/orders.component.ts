import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'super-angular-nx-app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {}
