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
    ButtonModule
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
  travelFormSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.travelForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      numberOfPassengers: [1, [Validators.required, Validators.min(1)]],
      service: [null, Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      remarks: ['']
    });
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
