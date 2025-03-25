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
