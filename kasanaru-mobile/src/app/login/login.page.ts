import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { User } from '../models/user';
import { Store } from '../store/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // この辺はapiの確認とstoreにあるデータ共有の練習に使ったから汚い
  private basedUrl = 'https://hackaichi2021.herokuapp.com/';
  private user = {
    email: 'neko',
    password: 'dda',
    username: 'dsa',
    age: 43
  };
  private message = 'neko';

  constructor(private httpclient: HttpClient, private store:  Store){
    this.message = this.store.getMessage();
  }

   // get
  getData(): void {
    this.httpclient.get<User>(this.basedUrl).subscribe(res => {
      console.log(res);
    });
  }

  // post
  authData(): void {
    this.httpclient.post<User>(`${this.basedUrl}api/user/register`, this.user).subscribe(res => {
      console.log(res);
    });
  }

  // dataのset
  setMessage(): void {
    this.store.setMessage('change');
    this.message = this.store.getMessage();
  }

  ngOnInit() {
  }

}
