import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyFirstApp';
  msg  = "Good Morning Happy Lohri Everyone";
  cur = 1500;
  emiDate: Date = new Date();
  celcius!: number;
  Fahrenheit !: number;

  // obs = new Observable(observer => {
  //   console.log('Observable Starts');
  //   setTimeout(() => {observer.next('1')}, 1000);
  //   setTimeout(() => {observer.next('2')}, 2000);
  //   setTimeout(() => {observer.next('3')}, 3000);
  //   // setTimeout(() => {observer.error("error is emitted from here")}, 3500); // error will be emitted from here
  //   setTimeout(() => {observer.complete()}, 3500); // code will compelte here
  //   setTimeout(() => {observer.next('4')}, 4000);
  //   setTimeout(() => {observer.next('5')}, 5000);
  // });

  constructor() {
    console.log("AppComponent: Constructor is Called");
  }
  ngOnInit() {
    console.log("AppComponent: ngOnInit is Called");
    // this.obs.subscribe(
    //   val => {console.log(val);}, // next callback
    //   error => {console.log("error");}, // error callback
    //   () => {console.log("completed");} // complete callback
    // );
    const array1 = [1,2,3,4,5,6,7];
    const array2 = ['a','b','c','d','e','f','g'];

    // Implementation using Of Operator
    // const obs = of(array1, array2);
    // const obs = of(1,2,3,4,5);
    // const obs = of("Himanshu", "Sharma");
    // const obs = of(100,200,300,400,500,array1,"Himanshu", "Sharma");

    // Implementation using from Operator
    // const obs = from(array1);
    // const obs = of(1,2,3,4,5);
    // const obs = from("Himanshu Sharma");
    // let myMap = new Map();
    // myMap.set(0, "Hello");
    // myMap.set(1, "Himanshu");
    // myMap.set(2, "Sharma");
    // const obs = from(myMap);
    // const obsof1 = of(100,200,300,400,500,array1,"Himanshu", "Sharma");
    
    // Implementation from Iterable
    const obs = from(this.generateNos());
    obs.subscribe(val => console.log(val),
    error => console.log("error"),
    () => console.log("complete"))
  }

  *generateNos() {
    var i = 0;
    while(i<5) {
      i = i+1;
      yield i;
    }
  }

  // ngOnChanges() {
  //   console.log("AppComponent: ngOnChanges is Called");
  // }

  // ngDoCheck() {
  //   console.log("AppComponent: ngDoCheck is Called");
  // }

  // ngAfterContentInit() {
  //   console.log("AppComponent: ngAfterContentInit is Called");
  // }

  // ngAfterContentChecked() {
  //   console.log("AppComponent: ngAfterContentChecked is Called");
  // }

  // ngAfterViewInit() {
  //   console.log("AppComponent: ngAfterViewInit is Called");
  // }

  // ngAfterViewChecked() {
  //   console.log("AppComponent: ngAfterViewChecked is Called");
  // }

  // ngOnDestroy() {
  //   console.log("AppComponent: ngOnDestroy is Called");
  // }
}
