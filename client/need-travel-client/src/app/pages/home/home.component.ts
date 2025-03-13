import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonService } from '../../common-services/common.service';

@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  carouselItems: any= [];

  constructor(private commonService: CommonService){
    this.carouselItems = commonService.carouselItems;
  }

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

}
