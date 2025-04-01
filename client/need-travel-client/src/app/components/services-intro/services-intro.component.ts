import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../common-services/common.service';

@Component({
  selector: 'app-services-intro',
  imports: [CommonModule],
  templateUrl: './services-intro.component.html',
  styleUrl: './services-intro.component.scss'
})
export class ServicesIntroComponent {

  @Input()
  serviceHeader: string = ''
  services: any[] = [];

  constructor(private commonService: CommonService){
    this.services  = this.commonService.servicesList
  }
}

// <!-- train -->
// <!-- transit_ticket -->

