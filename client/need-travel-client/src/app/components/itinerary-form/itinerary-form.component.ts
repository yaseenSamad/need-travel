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
import { MessageService } from 'primeng/api';

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

  constructor(private fb: FormBuilder,private commonService: CommonService,private messageService: MessageService) {
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
    this.commonService.showLoader()
    this.travelFormSubmitted = true;
  
    if (this.travelForm.invalid) {
      this.travelForm.markAllAsTouched();
      let errorMessage = this.getFormValidationErrors();
      this.commonService.hideLoader()
      this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage , life: 3000 });
      return;
    }

    let formData = { ...this.travelForm.value };

    formData.departure = this.formatDate(formData.departure);
    formData.return = this.formatDate(formData.return);
    formData.countryCode = formData.countryCode?.value || '';
    formData.service = formData.service?.label || '';

    this.commonService.submitEnquiryForm(formData).subscribe((response)=>{
      this.commonService.hideLoader()
      if(response.data && response.success){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form submitted' , life: 3000 });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to Submit' , life: 3000 });
      }
    },(error)=>{
      this.commonService.hideLoader()
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to Submit' , life: 3000 });
    })
  
  }

  formatDate(date: any): string {
    if (!date) return '';
    return new Date(date).toISOString().split('T')[0];
  }

  getFormValidationErrors(): string {
    for (const key in this.travelForm.controls) {
      if (this.travelForm.controls[key].invalid) {
        const controlErrors = this.travelForm.controls[key].errors;
        if (controlErrors) {
          if (controlErrors['required']) {
            return `${key} is required`;
          }
          if (controlErrors['email']) {
            return `Invalid email format`;
          }
          if (controlErrors['pattern']) {
            return `${key} has an invalid format`;
          }
          if (controlErrors['min']) {
            return `${key} should be at least ${this.travelForm.controls[key].errors?.['min'].min}`;
          }
        }
      }
    }
    return 'Please fill all required fields correctly.';
  }

}
