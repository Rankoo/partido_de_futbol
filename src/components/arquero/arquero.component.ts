import { Component } from '@angular/core';
import { MedioCampoComponent } from '../medio-campo/medio-campo.component';

@Component({
  selector: 'arquero',
  standalone: true,
  imports: [MedioCampoComponent],
  templateUrl: './arquero.component.html',
  styleUrl: './arquero.component.css'
})
export class ArqueroComponent {

}
