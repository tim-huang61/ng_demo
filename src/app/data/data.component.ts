import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  result: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  query() {
    this.http.get('http://localhost:8085/mongo/query', { headers: this.getHeaders() })
      .subscribe(resp => this.result = resp, error => this.result = error.error);
  }

  update() {
    this.http.get('http://localhost:8085/mongo/update', { headers: this.getHeaders() })
      .subscribe(resp => this.result = resp, error => this.result = error.error);
  }

  insert() {
    this.http.get('http://localhost:8085/mongo/insert', { headers: this.getHeaders() })
      .subscribe(resp => this.result = resp, error => this.result = error.error);
  }

  delete() {
    this.http.get('http://localhost:8085/mongo/delete', { headers: this.getHeaders() })
      .subscribe(resp => this.result = resp, error => this.result = error.error);
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage['user']}`);
  }
}
