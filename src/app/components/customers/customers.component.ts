

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
  animations: [fadeInOut]
})
export class CustomersComponent {

}
