import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArqueroComponent } from '../components/arquero/arquero.component';

@Component({
  selector: 'tecnico',
  standalone: true,
  imports: [RouterOutlet, ArqueroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'partido_de_futbol';
}
