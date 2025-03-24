import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import {InputNumberModule} from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CommonService } from '../../common-services/common.service';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-itinerary-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    InputNumberModule,
    SelectModule,
    DropdownModule,
    IconFieldModule,
    InputIconModule,
    TextareaModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    DatePickerModule,
  ],
  templateUrl: './itinerary-form.component.html',
  styleUrl: './itinerary-form.component.scss'
})
export class ItineraryFormComponent implements OnInit{

  travelForm!: FormGroup;

  services = [
    { label: 'Air Tickets', value: 'air-tickets' },
    { label: 'Hotel', value: 'hotel' },
    { label: 'Airport Transfer', value: 'airport-transfer' },
    { label: 'VISA', value: 'visa' },
    { label: 'Meet and Greet', value: 'meet-greet' },
    { label: 'Train Tickets', value: 'train-tickets' },
    { label: 'Entry Tickets', value: 'entry-tickets' },
    { label: 'Packages', value: 'packages' }
  ];

  countryCodes = [
    {countryCode: 'AE', value: '+971', flag: 'https://flagcdn.com/w320/ae.png'}
  ];

  minDate = new Date();


  travelFormSubmitted = false;

  constructor(private fb: FormBuilder,private commonService: CommonService) {
    this.loadCountryCode()
    
  }



  ngOnInit() {
    this.travelForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{7,15}$')]],
      numberOfPassengers: [1, [Validators.required, Validators.min(1)]],
      service: [null, Validators.required],
      from: ['', Validators.required],
      destination: ['', Validators.required],
      departure: ['',Validators.required],
      return: ['',Validators.required],
      remarks: [''],
      countryCode: [ 
        {countryCode: 'AE', value: '+971', flag: 'https://flagcdn.com/w320/ae.png'} , Validators.required],
    });
  }

  loadCountryCode(){
    try {
      const countryCodes =  this.commonService.fetchCountryCodes().then((value)=>{
        console.log(value);
        this.countryCodes = value
      }).catch((err)=>{
        console.error('Error loading country codes:', err);
      })
    } catch (error) {
      console.error('Error loading country codes:', error);
    }
  }

  onSubmit(){
    console.log(this.travelForm.controls['firstName'].invalid , this.travelForm.controls['firstName'].touched);
    console.log(this.travelForm);
    this.travelFormSubmitted = true;
  
    if (this.travelForm.invalid) {
      this.travelForm.markAllAsTouched();
      return;
    }
  
    console.log("Form Submitted Successfully!");
    console.log(this.travelForm);
  }

}
