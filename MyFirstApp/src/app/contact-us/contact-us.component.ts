import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{
  title = "Top 5 Corona Vaccines";
  num !:  number;
  showMe !: boolean; 
  cssStringVar : string = 'red size20';
  vaccines =  [
    {name:'CoviShield', company:'Cipla', approvedBy: 'WHO', releaseDate: 'March 4, 2021' },
    {name:'Covaxin', company:'Cadila', approvedBy: 'WHO', releaseDate: 'March 25, 2021' },
    {name:'CoviSelf', company:'EfoDerma', approvedBy: 'WHO', releaseDate: 'May 4, 2021' },
    {name:'Sputnik', company:'Forxiga', approvedBy: 'WHO', releaseDate: 'March 27, 2021' },
    {name:'Sputnik Booster', company:'Mapvital', approvedBy: 'WHO', releaseDate: 'June 10, 2021' },
  ];

  countries = [
    {
      countryName: 'India', countryCode: 'IND001',
      vaccineStatus: [{age: '10-15', dose: '1'}, {age: '18-60', dose: '7'}, {age: '60 above', dose: '3'}]
    },
    
    {
      countryName: 'Russia', countryCode: 'RUSS010',
      vaccineStatus: [{age: '10-15', dose: '1'}, {age: '18-60', dose: '3'}, {age: '60 above', dose: '2'}]
    },
    
    {
      countryName: 'UK', countryCode: 'UK020',
      vaccineStatus: [{age: '10-15', dose: '2'}, {age: '18-60', dose: '2'}, {age: '60 above', dose: '1'}]
    }
  ]
}

