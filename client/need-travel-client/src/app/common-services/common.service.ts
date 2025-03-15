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

}
