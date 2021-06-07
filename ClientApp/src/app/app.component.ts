import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any; //any = string,object,class or etc
  _baseUrl = '';

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get(this._baseUrl+'api/User').subscribe(response => {
      this.users = response;
      //console.log(response)
    }, error => {
      console.log(error);
    });
  }
}
