import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination',
  imports: [IntroComponent,FooterComponent,CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})
export class DestinationComponent {
  items = [
    {
      id: 'collapseOne',
      // headerId: 'headingOne',
      title: 'Accordion Item #1',
      content:
        'This is the first item\'s accordion body. It is shown by default...',
      expanded: true,
    },
    {
      id: 'collapseTwo',
      // headerId: 'headingTwo',
      title: 'Accordion Item #2',
      content:
        'This is the second item\'s accordion body. It is hidden by default...',
      expanded: true,
    },
    {
      id: 'collapseThree',
      // headerId: 'headingThree',
      title: 'Accordion Item #3',
      content:
        'This is the third item\'s accordion body. It is hidden by default...',
      expanded: true,
    },
  ];

  toggleItem(index: number) {
    this.items.forEach((item, i) => {
      item.expanded = i === index ? !item.expanded : item.expanded;
    });
  }
}
