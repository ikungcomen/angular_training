import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpdata',
  templateUrl: './httpdata.component.html',
  styleUrls: ['./httpdata.component.css']
})
export class HttpdataComponent implements OnInit {

  baseUrl: string = "https://gorest.co.in/public/v1/users";
  myData!: any[];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  public getData() {
    this.http.get<any[]>(this.baseUrl).subscribe(data => {
      this.myData = data
    },
    error => {
      this.myData = error;
    }
    );
  }

}
