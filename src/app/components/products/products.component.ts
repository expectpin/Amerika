

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  animations: [fadeInOut]
})
export class ProductsComponent {
}
