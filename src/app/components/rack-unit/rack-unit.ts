import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';

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
  @Input() type: 'metal' | 'orange' | 'green' = 'metal';
// --- GESTION DES BOUTONS (KNOBS) ---
activeKnob = 0; // 0: rien, 1: Gain, 2: Threshold
rotationGain = -130;
rotationThreshold = -130;
startYKnob = 0;

// --- GESTION DES FADERS ---
fader1Pos = 70;
fader2Pos = 40;
isDraggingFader = 0; // 0: rien, 1: fader 1, 2: fader 2
startYFader = 0;

// Allumage du drag (Boutons)
startDrag(event: MouseEvent | TouchEvent, knobIndex: number) {
  this.activeKnob = knobIndex;
  this.startYKnob = this.getY(event);
  event.preventDefault();
  event.stopPropagation();
}

// Allumage du drag (Faders)
startDragFader(event: MouseEvent | TouchEvent, faderIndex: number) {
  this.isDraggingFader = faderIndex;
  this.startYFader = this.getY(event);
  event.preventDefault();
  event.stopPropagation();
}

// UN SEUL HOSTLISTENER POUR TOUT LE MONDE
@HostListener('window:mousemove', ['$event'])
@HostListener('window:touchmove', ['$event'])
handleGlobalMove(event: MouseEvent | TouchEvent) {
  const currentY = this.getY(event);

  // LOGIQUE DES BOUTONS (KNOBS)
  if (this.activeKnob !== 0) {
    const deltaY = this.startYKnob - currentY;
    this.startYKnob = currentY;
    const movement = deltaY * 2;

    if (this.activeKnob === 1) {
      this.rotationGain = Math.min(Math.max(this.rotationGain + movement, -130), 130);
    } else if (this.activeKnob === 2) {
      this.rotationThreshold = Math.min(Math.max(this.rotationThreshold + movement, -130), 130);
    }
  }

  // LOGIQUE DES FADERS
  if (this.isDraggingFader !== 0) {
    const deltaY = this.startYFader - currentY;
    this.startYFader = currentY;
    const movement = deltaY * 0.8;

    if (this.isDraggingFader === 1) {
      this.fader1Pos = Math.min(Math.max(this.fader1Pos + movement, 0), 100);
    } else if (this.isDraggingFader === 2) {
      this.fader2Pos = Math.min(Math.max(this.fader2Pos + movement, 0), 100);
    }
  }
}

@HostListener('window:mouseup')
@HostListener('window:touchend')
stopEverything() {
  this.activeKnob = 0;
  this.isDraggingFader = 0;
}

// Utilitaire pour récupérer le Y peu importe le support (Souris ou Tactile)
private getY(event: MouseEvent | TouchEvent): number {
  return event instanceof MouseEvent ? event.pageY : event.touches[0].pageY;
}
}