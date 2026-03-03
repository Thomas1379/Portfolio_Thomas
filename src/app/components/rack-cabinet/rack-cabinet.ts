import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RackUnitComponent } from '../rack-unit/rack-unit';

interface Project {
  title: string;
  desc: string;
  type: 'default' | 'orange' | 'green'; // On limite les choix ici
}

@Component({
  selector: 'app-rack-cabinet',
  standalone: true,
  imports: [CommonModule, RackUnitComponent],
  templateUrl: './rack-cabinet.html',
  styleUrl: './rack-cabinet.scss'
})
export class RackCabinetComponent {
  projects: Project[] = [
    { 
      title: 'SORTIR', 
      desc: 'Sorties culturelles', 
      type: 'default' 
    },
    { 
      title: 'ENI-ENCHERES', 
      desc: 'Ventes aux enchères', 
      type: 'orange' 
    },
    { 
      title: 'GROOVE TRACKER', 
      desc: 'Batterie & Rythme', 
      type: 'green' 
    }
  ];
}