import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../environments/environment';
import { catchError, map, Observable, pipe, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private spinner: NgxSpinnerService, private http: HttpClient) { }

  servicesList = [
    { label: 'Air Tickets', icon: 'airplane_ticket' },
    { label: 'Hotel', icon: 'hotel' },
    { label: 'Airport Transfer', icon: 'local_shipping' },
    { label: 'VISA', icon: 'credit_card' },
    { label: 'Meet and Greet', icon: 'handshake' },
    { label: 'Train Tickets', icon: 'train' },
    { label: 'Entry Tickets', icon: 'local_activity' },
    { label: 'Packages', icon: 'luggage' }
  ];

  packagesList =  [
    {
      id: '1',
      title: "Paris, France",
      description: "The city of love, known for its rich history, stunning architecture, and world-famous cuisine rfegyc freceue crercuifr fecefciu recerc rfrf rdfd dece ceu dececxu ececuh fece cfebhfec uhcre efcubec ercrhc efcerhb.",
      image: "https://images.unsplash.com/photo-1609670289875-590e8ec05c88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRvdXJpc3QlMjBhdHRyYWN0aW9ufGVufDB8fDB8fHwy",
      referenceLink: "https://en.parisinfo.com/",
      highlightText: "Experience the magic of the Eiffel Tower and Louvre Museum.",
      content: 'This is the first item\'s accordion body....',
    },
    {
      id: '2',
      title: "Tokyo, Japan",
      description: "A bustling metropolis blending traditional temples with cutting-edge technology and vibrant street life.",
      image: "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cmlzdCUyMGF0dHJhY3Rpb258ZW58MHx8MHx8fDI%3D",
      referenceLink: "https://www.gotokyo.org/en/",
      highlightText: "Explore the unique culture of Shibuya, Shinjuku, and Asakusa.",
      content: 'This is the second item\'s accordion body....',
    },
    {
      id: '3',
      title: "New York City, USA",
      description: "The city that never sleeps, home to Broadway, Times Square, and Central Park.",
      image: "https://images.unsplash.com/photo-1616893104937-fddf82966b4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRvdXJpc3QlMjBhdHRyYWN0aW9ufGVufDB8fDB8fHwy",
      referenceLink: "https://www.nycgo.com/",
      highlightText: "Visit the Statue of Liberty and enjoy the skyline from the Empire State Building.",
      content: 'This is the third item\'s accordion body....',
    },
    {
      id: '4',
      title: "Rome, Italy",
      description: "A historic city filled with ancient ruins, art, and world-class cuisine.",
      image: "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cmlzdCUyMGF0dHJhY3Rpb258ZW58MHx8MHx8fDI%3D",
      referenceLink: "https://www.turismoroma.it/en",
      highlightText: "Step back in time at the Colosseum and Vatican City.",
      content: 'This is the fourth item\'s accordion body....',
    },
    {
      id: '5',
      title: "Sydney, Australia",
      description: "A coastal paradise known for its stunning beaches, Opera House, and relaxed lifestyle.",
      image: "https://images.unsplash.com/photo-1603489243637-66c1cfdd9b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cmlzdCUyMGF0dHJhY3Rpb258ZW58MHx8MHx8fDI%3D",
      referenceLink: "https://www.sydney.com/",
      highlightText: "Enjoy breathtaking views at the Sydney Harbour Bridge and Bondi Beach.",
      content: 'This is the fifth item\'s accordion body....',
    }
  ];

  carouselItems = [
    { id: 1, image: 'assets/windmill-on-famland.jpg', name: 'windmill-on-famland' },
    { id: 2, image: 'assets/valley-of-hills.jpg', name: 'valley-of-hills' },
    { id: 3, image: 'assets/rise-of-standing-stones.jpg', name: 'rise-of-standing-stones' }
  ];

  fetchCountryCodes(): Promise<any[]>{
   return fetch('https://restcountries.com/v3.1/all?fields=cca2,idd,flags')
  .then(response => response.json())
  .then(data => {
    const countryCodeList = data.map((country: any) => ({
      countryCode: country.cca2 || '',
      value: country.idd?.root ? `${country.idd.root}${country.idd.suffixes?.[0] || ''}` : '', // Country Calling Code
      flag: country.flags?.png || country.flags?.svg || ''
    })).filter((countryDetails: any)=>{
      return countryDetails.value !== '' && countryDetails.flag !== '' && countryDetails.countryCode !== ''
    }).sort((a: any, b: any) => a.value.localeCompare(b.value));
    return countryCodeList;
  })
  .catch((error) => {
    console.error('Error fetching country codes:', error)
    return []
  });
  }

  submitEnquiryForm(body: any): Observable<any>{
    const baseUrl = environment.baseUrl;
    const apiUrl = `${baseUrl}/api/travel-enquiry-request`

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authtoken' : 'aa8b3416-6b2b-4f4e-9171-94e5d1d86083'
      })
    };
    
    return this.http.post(apiUrl,body,httpOptions).pipe(
      tap(response => console.log(response)),
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(() => new Error('Something went wrong. Please try again.'));
  }

  showLoader(){
    this.spinner.show();
  }

  hideLoader(){
    this.spinner.hide();
  }

}
