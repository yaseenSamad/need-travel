import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet,RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { Toast } from 'primeng/toast';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,NavbarComponent,CommonModule,NgxSpinnerComponent,Toast,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'need-travel-client';

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlTree = this.router.parseUrl(event.urlAfterRedirects);
        const fragment = urlTree.fragment

        document.body.scrollTop = 0;
        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
          return;
        }
       
      }
    });
  }
  

  scrollToTop(){
    setTimeout(() => {
      const element = document.getElementById('top');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  scrollToDown(){
    // document.body.scrollTop = document.body.scrollHeight;
    setTimeout(() => {
      const element = document.getElementById('bottom');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

}
