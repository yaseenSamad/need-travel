import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ItineraryFormComponent } from '../../components/itinerary-form/itinerary-form.component';

@Component({
  selector: 'app-contact',
  imports: [IntroComponent,FooterComponent,ItineraryFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  navigateToSocialMediaPlatfor(type: 'facebook' | 'instagram' | 'whatsapp'){
    if(type == 'facebook'){
      window.location.href = 'https://www.facebook.com/explorewithneed'
    }else if(type == 'instagram'){
      window.location.href = 'https://www.instagram.com/explorewithneed/'
    }else if(type == 'whatsapp'){
      window.location.href = "https://wa.me/971505954429?text=Hello%20there!"
    }
  }

}
