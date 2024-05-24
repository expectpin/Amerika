

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  animations: [fadeInOut]
})
export class OrdersComponent {
}
