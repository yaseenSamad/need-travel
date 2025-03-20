import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CommonService } from '../../common-services/common.service';
import { IntroComponent } from '../../components/intro/intro.component';
import { ItineraryFormComponent } from '../../components/itinerary-form/itinerary-form.component';
import {DestinationListComponent} from '../../components/destination-list/destination-list.component'
import { ServicesIntroComponent } from '../../components/services-intro/services-intro.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-home',
  imports: [CarouselModule,IntroComponent,ItineraryFormComponent,DestinationListComponent,ServicesIntroComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  carouselItems: any= [];

  constructor(private commonService: CommonService){
    this.carouselItems = commonService.carouselItems;

    this.commonService.showLoader()
    setTimeout(() => {
      this.commonService.hideLoader()
    }, 3000);
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
