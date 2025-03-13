import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  sidebarOpen = false;

  constructor(private elementRef: ElementRef){

  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (
      this.sidebarOpen && // Sidebar is open
      this.elementRef.nativeElement.querySelector('.sidebar') && // Sidebar exists
      !this.elementRef.nativeElement.querySelector('.sidebar').contains(event.target) && // Click is outside sidebar
      !this.elementRef.nativeElement.querySelector('.menu-btn').contains(event.target) // Click is not on menu button
    ) {
      this.sidebarOpen = false;
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
