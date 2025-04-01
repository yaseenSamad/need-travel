import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { Router } from '@angular/router';
import { CommonService } from '../../common-services/common.service';

@Component({
  selector: 'app-destination-list',
  imports: [CardModule,ButtonModule,CommonModule,CarouselModule],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.scss'
})
export class DestinationListComponent {
  destionationList: any[] = []

  responsiveOptions = [
    {
      breakpoint: '1500px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1200px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '800px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private router: Router,private commonService: CommonService ){
    this.destionationList = this.commonService.packagesList
  }

  trackByDestinationId(index: number, destination: any): number {
    return destination.id;
  }

  navigateToDestination(item: any){
    console.log(item);
    console.log(this.router);
    // this.router.navigate(['/destination'])
    this.router.navigate(['/packages'],{ fragment: item.id });
  }

}
