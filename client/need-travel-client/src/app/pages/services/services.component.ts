import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-services',
  imports: [FooterComponent,IntroComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
