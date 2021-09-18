import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../models/token';
import { Store } from '../store/store';
import { Favorite } from '../models/favorite';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  private basedUrl = 'https://hackaichi2021.herokuapp.com/';

  // あとで置き換える
  // testToken = new Token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6IjFlMGRiNTgxLTJiMWYtNDg5Ny1iMzkxLWM2NDgyYTQ4NzU1NCIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTYzMTc4MzY0MCwidXNlcl9pZCI6Mn0.xm5Wdro-DjcdGHUlFRm-L17hodbpsa-hTIrv6HeSh9E", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzIzODc1NDAsInJlZnJlc2hfdXVpZCI6IjYxNThhMjZkLTU2MjgtNGIzMi05YmQzLTI5OGQwYjNiYTc5NSIsInVzZXJfaWQiOjJ9.Ds69R712NC4dhXYKqaK5xB-ZUWEozQPtm0ScFccJAmY")
  token: Token

  favorite: Favorite
  username: string
  age: number
  sex: number

  isDataAvailable: boolean = false

  constructor(private httpclient: HttpClient, private store: Store) { }

  ngOnInit() {
    this.token = this.store.getToken()
    console.log(this.token)
    this.httpclient.post<any>(`${this.basedUrl}api/user/favorite/get`, this.token).subscribe(res => {
      var rawdata = res.Favorite
      this.favorite = this.parseFavorite(rawdata)
      this.username = res.username
      this.age = res.age
      this.isDataAvailable = true
      console.log(res);
    });
  }

  update() {
    var body = { ...this.favorite, ...this.token }
    this.httpclient.post(`${this.basedUrl}api/user/update`, body).subscribe(res => {
      console.log(res);
    });
    console.log(this.favorite)
  }

  parseFavorite(rawdata): Favorite {
    return new Favorite(rawdata.sex, rawdata.game, rawdata.sport, rawdata.book, rawdata.travel, rawdata.internet, rawdata.anime, rawdata.movie, rawdata.music, rawdata.gourmet, rawdata.muscle, rawdata.camp, rawdata.tv, rawdata.cook)
  }
}

export namespace sex {
  export const MALE = { value: 0, name: '男' };
  export const FEMALE = { value: 1, name: '女' };
}