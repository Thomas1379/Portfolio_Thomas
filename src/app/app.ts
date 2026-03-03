import { Component } from '@angular/core';
import { RackCabinetComponent } from './components/rack-cabinet/rack-cabinet';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RackCabinetComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'portfolio-studio';
}
