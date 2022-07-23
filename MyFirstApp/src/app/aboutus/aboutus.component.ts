import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  title = "I am About Us page";
  isDisabled = false;
  value = "Hello Please Enter Some Text Here in the Box !!";

  clearValue() {
    this.value = "";
  }

  onDisable() {
    this.isDisabled = true;
  }

  onEnable() {
    this.isDisabled = false;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
