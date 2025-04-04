import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  @Input() fullText: string = 'Welcome to Need Travel!';
  @Input() displaySearchStyle: boolean = false;
  displayedText: string = '';
  typingSpeed: number = 100;
  deletingSpeed: number = 500;
  delayBeforeDeleting: number = 500;
  delayBeforeTyping: number = 50;

  ngOnInit(): void {
      this.startTypingEffect()
  }

  startTypingEffect() {
    let index = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting && index < this.fullText.length) {
        this.displayedText += this.fullText.charAt(index);
        index++;
      } else if (isDeleting && index > 0) {
        this.displayedText = this.displayedText.slice(0, -1);
        index--;
      }

      if (index === this.fullText.length && !isDeleting) {
        setTimeout(() => (isDeleting = true), this.delayBeforeDeleting);
      } else if (index === 0 && isDeleting) {
        isDeleting = false;
        setTimeout(() => {}, this.delayBeforeTyping);
      }
    }, isDeleting ? this.deletingSpeed : this.typingSpeed);
  }
}
