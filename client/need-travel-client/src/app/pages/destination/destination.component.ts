import { Component, OnInit } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../common-services/common.service';

@Component({
  selector: 'app-destination',
  imports: [IntroComponent,FooterComponent,CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})
export class DestinationComponent implements OnInit {
  items: any[] = [];

  constructor(private commonService: CommonService){}

  ngOnInit(): void {
      this.items = this.commonService.packagesList.map(item => ({...item,expanded: true}))
  }

  toggleItem(index: number) {
    this.items.forEach((item, i) => {
      item.expanded = i === index ? !item.expanded : item.expanded;
    });
  }
}
