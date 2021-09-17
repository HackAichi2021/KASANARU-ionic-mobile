import { Component, OnInit } from '@angular/core';
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
  testToken = new Token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6ImJhNDVlOWMyLTEzMDctNGFjNy05ZWYxLTg2MjA4YTVhM2MyMyIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTYzMTkwMDczNSwidXNlcl9pZCI6OX0.8k3HQHiN14PFhWxggtCARTmRkJqCkSenXagHoCNOI14", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzI1MDQ2MzUsInJlZnJlc2hfdXVpZCI6ImRkOTc4OTAyLTEzZjYtNGJmMC05NDVlLWVkNzFkZjdmODFkYiIsInVzZXJfaWQiOjl9.Q3Vgyf53dAK9SraUZKCqoMe-H0l5ttmGujnmGfz6_-8")

  favorite: Favorite
  username: string
  age: number
  sex: number
  email: string = ""

  isDataAvailable: boolean = false

  constructor(private httpclient: HttpClient, private store: Store) { }

  ngOnInit() {
    this.httpclient.post<any>(`${this.basedUrl}api/user/favorite/get`, this.testToken).subscribe(res => {
      var rawdata = res.Favorite
      this.favorite = this.parseFavorite(rawdata)
      this.username = res.username
      this.age = res.age
      this.email = res.email
      this.isDataAvailable = true
      console.log(res);
    });
  }

  update() {
    var body = { ...this.favorite, ...this.testToken }
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