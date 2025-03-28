import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-intro',
  imports: [CommonModule],
  templateUrl: './services-intro.component.html',
  styleUrl: './services-intro.component.scss'
})
export class ServicesIntroComponent {

  @Input()
  serviceHeader: string = ''
  services = [
    { label: 'Air Tickets', icon: 'airplane_ticket' },
    { label: 'Hotel', icon: 'hotel' },
    { label: 'Airport Transfer', icon: 'local_shipping' },
    { label: 'VISA', icon: 'credit_card' },
    { label: 'Meet and Greet', icon: 'handshake' },
    { label: 'Train Tickets', icon: 'train' },
    { label: 'Entry Tickets', icon: 'local_activity' },
    { label: 'Packages', icon: 'luggage' }
];
}

// <!-- train -->
// <!-- transit_ticket -->

