import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [IntroComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
