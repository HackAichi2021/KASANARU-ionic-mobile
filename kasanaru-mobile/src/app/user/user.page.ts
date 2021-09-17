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

  // あとで置き換える(Yamada)
  // testToken = new Token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6Ijg1YzhhYTc5LWRjMzctNGUxNS1hYmZlLWM2MzRjZTEzZWMxYiIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTYzMTg2MDgyMSwidXNlcl9pZCI6NX0.5w-htDk7tsaOPGu9yMeDhLcO6ITVgQl_wsz8-kSoacw", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzI0NjQ3MjEsInJlZnJlc2hfdXVpZCI6Ijc0MWYxNjFjLWM0YzQtNDZiMC1iZmY3LWE4OTM4ZTAyYWM3NiIsInVzZXJfaWQiOjV9.rOoEGL9cf_Z5ld7KkqkRNGmRpEfXwYFOuAuUCbhUcug")

  // あとで置き換える(Tanaka)
  testToken = new Token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6Ijc1M2IyM2UxLTYxNTQtNDZiZC1iNDNkLTI3NDUyZmI0Y2Q1ZSIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTYzMTg2MDk5MywidXNlcl9pZCI6NH0.cdyPetMQgrr7xUQzRvpeHSthqYbqz7ufXLaiwSkst0U", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzI0NjQ4OTMsInJlZnJlc2hfdXVpZCI6IjJhZmY3ZDcxLTE4OTAtNDIwMy04Yjg0LTY5OTg0ZWI2Mzc3MyIsInVzZXJfaWQiOjR9.Zn_Ia9-uyLRKjK06QLRSJ8u2NJGw3yhk8XStENjgpK0")


  favorite: Favorite
  username: string
  age: number
  sex: number

  isDataAvailable: boolean = false

  constructor(private httpclient: HttpClient, private store: Store) { }

  ngOnInit() {
    this.httpclient.post<any>(`${this.basedUrl}api/user/favorite/get`, this.testToken).subscribe(res => {
      var rawdata = res.Favorite
      this.favorite = this.parseFavorite(rawdata)
      this.username = res.username
      this.age = res.age
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