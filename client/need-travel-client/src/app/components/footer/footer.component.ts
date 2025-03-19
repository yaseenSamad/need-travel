import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  navigateToSocialMediaPlatfor(type: 'facebook' | 'instagram'){
    if(type == 'facebook'){
      window.location.href = 'https://www.facebook.com/explorewithneed'
    }else if(type == 'instagram'){
      window.location.href = 'https://www.instagram.com/explorewithneed/'
    }
  }
}
