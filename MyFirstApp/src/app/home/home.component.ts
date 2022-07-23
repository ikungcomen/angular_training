import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstName = "Anurart";
  lastName = "Kaewlamul";

  Counter = 5;

  increment() {
    this.Counter ++;
  }
  decrement() {
    this.Counter --;
  }

  countChangedHandler(count: number) {
    this.Counter = count;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
