import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { amountCheck } from '../amountCheck.validators';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

templateDriventitle = "Template Driven Form";
reactiveFormtitle = "Reactive Career Form";

  countryList =  [
    {id: "1", name: "India"},{id: "2", name: "USA"},{id: "3", name: "England"}
  ];

  onSubmit(contactForm:any) {
    console.log(contactForm.value);
  }

  onReactiveFormSubmit() {
    console.log(this.contactForm.value);
  }

  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(10)]),
    lastname: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    isMarried: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    amountVal: new FormControl("", [amountCheck])

    ,inputName: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z]+$"), Validators.maxLength(30)])
    ,inputEmail: new FormControl('', [Validators.email])
    ,inputPhone: new FormControl('', [Validators.required, Validators.maxLength(10)])

    
  })

  get firstname() {
    return this.contactForm.get('firstname');
  }
  get lastname() {
    return this.contactForm.get('lastname');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get gender() {
    return this.contactForm.get('gender');
  }
  get isMarried() {
    return this.contactForm.get('isMarried');
  }
  get country() {
    return this.contactForm.get('country');
  }
  get amountVal() {
    return this.contactForm.get("amountVal");
  }

  /*Start by anurart */
  get inputName() {
    return this.contactForm.get("inputName");
  }
  get inputEmail() {
    return this.contactForm.get("inputEmail");
  }
  get inputPhone() {
    return this.contactForm.get("inputPhone");
  }
  /*End by anurart */

  constructor() { }

  ngOnInit(): void {
  }

}
