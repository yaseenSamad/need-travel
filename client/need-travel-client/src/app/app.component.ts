import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,NavbarComponent,CommonModule,NgxSpinnerComponent,Toast],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'need-travel-client';

  constructor(){}

  scrollToTop(){
    document.body.scrollTop = 0;
  }

  scrollToDown(){
    document.body.scrollTop = document.body.scrollHeight;
  }

}
