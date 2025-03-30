import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination-list',
  imports: [CardModule,ButtonModule,CommonModule,CarouselModule],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.scss'
})
export class DestinationListComponent {
  destionationList: any[] = [
    {
      id: 1,
      title: "Paris, France",
      description: "The city of love, known for its rich history, stunning architecture, and world-famous cuisine rfegyc freceue crercuifr fecefciu recerc rfrf rdfd dece ceu dececxu ececuh fece cfebhfec uhcre efcubec ercrhc efcerhb.",
      image: "https://images.unsplash.com/photo-1609670289875-590e8ec05c88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRvdXJpc3QlMjBhdHRyYWN0aW9ufGVufDB8fDB8fHwy",
      referenceLink: "https://en.parisinfo.com/",
      highlightText: "Experience the magic of the Eiffel Tower and Louvre Museum."
    },
    {
      id: 2,
      title: "Tokyo, Japan",
      description: "A bustling metropolis blending traditional temples with cutting-edge technology and vibrant street life.",
      image: "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cmlzdCUyMGF0dHJhY3Rpb258ZW58MHx8MHx8fDI%3D",
      referenceLink: "https://www.gotokyo.org/en/",
      highlightText: "Explore the unique culture of Shibuya, Shinjuku, and Asakusa."
    },
    {
      id: 3,
      title: "New York City, USA",
      description: "The city that never sleeps, home to Broadway, Times Square, and Central Park.",
      image: "https://images.unsplash.com/photo-1616893104937-fddf82966b4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRvdXJpc3QlMjBhdHRyYWN0aW9ufGVufDB8fDB8fHwy",
      referenceLink: "https://www.nycgo.com/",
      highlightText: "Visit the Statue of Liberty and enjoy the skyline from the Empire State Building."
    },
    {
      id: 4,
      title: "Rome, Italy",
      description: "A historic city filled with ancient ruins, art, and world-class cuisine.",
      image: "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cmlzdCUyMGF0dHJhY3Rpb258ZW58MHx8MHx8fDI%3D",
      referenceLink: "https://www.turismoroma.it/en",
      highlightText: "Step back in time at the Colosseum and Vatican City."
    },
    {
      id: 5,
      title: "Sydney, Australia",
      description: "A coastal paradise known for its stunning beaches, Opera House, and relaxed lifestyle.",
      image: "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cmlzdCUyMGF0dHJhY3Rpb258ZW58MHx8MHx8fDI%3D",
      referenceLink: "https://www.sydney.com/",
      highlightText: "Enjoy breathtaking views at the Sydney Harbour Bridge and Bondi Beach."
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1500px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1200px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '800px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private router: Router ){}

  trackByDestinationId(index: number, destination: any): number {
    return destination.id;
  }

  navigateToDestination(){
    console.log(this.router);
    // this.router.navigate(['/destination'])
    this.router.navigate(['/packages'],{ fragment: 'aa' });
  }

}
