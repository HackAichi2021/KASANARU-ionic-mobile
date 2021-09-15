import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  private basedUrl = 'https://hackaichi2021.herokuapp.com/';
  private user = {
    email: 'neko',
    password: 'dda',
    username: 'dsa',
    age: 43
  };

  constructor(private httpclient: HttpClient){
  }

  getData(): void{
    this.httpclient.get<User>(this.basedUrl).subscribe(res => {
      console.log(res);
    });
  }

  authData(): void{
    this.httpclient.post<User>(`${this.basedUrl}api/user/register}`, this.user).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
