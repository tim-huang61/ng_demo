import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/json');
    this.http.post('http://localhost:8085/api/login', this.user, { headers }).subscribe((resp: any) => {
      localStorage['user'] = resp.token;
      this.router.navigateByUrl('/data');
    });
  }
}

interface IUser {
  username: string;
  password: string;
}
