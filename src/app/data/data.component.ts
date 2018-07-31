import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  result: any = {};
  student: Student = new Student();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  query(name: string) {
    this.http.get(`http://localhost:8085/mongo/query?name=${name}`, { headers: this.getHeaders() })
      .subscribe(resp => this.result = resp, error => this.result = error.error);
  }

  update() {
    this.http.put('http://localhost:8085/mongo/update', this.student, { headers: this.getHeaders() })
      .subscribe(resp => this.result = resp, error => this.result = error.error);
  }

  insert() {
    this.http.post('http://localhost:8085/mongo/insert', this.student, { headers: this.getHeaders() })
      .subscribe(resp => this.result = resp, error => this.result = error.error);
  }

  delete(name: string) {
    this.http.delete(`http://localhost:8085/mongo/delete?name=${name}`, { headers: this.getHeaders() })
      .subscribe(resp => this.result = resp, error => this.result = error.error);
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage['user']}`);
  }
}

class Student {
  name = '';
  age = 20;
  telephone = '';
  mobile = '';
}
