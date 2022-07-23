import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent  {
  // @Input Decorator is used to configure the input properties of the component where we
  // will receive the values
  @Input() count!: number;


  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  increment() {
    this.count ++;
    this.countChanged.emit(this.count);
  }
  decrement() {
    this.count --;
    this.countChanged.emit(this.count);
  }
}
