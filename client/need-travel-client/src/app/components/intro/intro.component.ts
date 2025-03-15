import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  fullText: string = 'Welcome to Need Travel!'; // Text to display
  displayedText: string = ''; // Text that appears dynamically
  typingSpeed: number = 300; // Typing speed in milliseconds
  deletingSpeed: number = 50; // Speed of backspacing
  delayBeforeDeleting: number = 1000; // Delay before backspacing
  delayBeforeTyping: number = 100; // Delay before retyping

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
