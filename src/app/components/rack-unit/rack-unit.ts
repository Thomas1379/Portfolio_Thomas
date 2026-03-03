import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rack-unit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rack-unit.html',
  styleUrl: './rack-unit.scss'
})
export class RackUnitComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() type: 'default' | 'orange' | 'green' = 'default';
}
