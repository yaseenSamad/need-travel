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
  // var my_element = document.getElementById("my_element");

  // my_element.scrollIntoView({
  //   behavior: "smooth",
  //   block: "start",
  //   inline: "nearest"
  // });
}
