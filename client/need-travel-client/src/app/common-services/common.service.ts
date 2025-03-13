import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  carouselItems = [
    { id: 1, image: 'assets/windmill-on-famland.jpg', name: 'windmill-on-famland' },
    { id: 2, image: 'assets/valley-of-hills.jpg', name: 'valley-of-hills' },
    { id: 3, image: 'assets/rise-of-standing-stones.jpg', name: 'rise-of-standing-stones' }
  ];


}
