import { Component, OnInit } from '@angular/core';
import { Store } from '../../../../store/store';
import { YourInfo } from '../../../../models/yourInfo';
import { Token } from '../../../../models/token';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-matched',
  templateUrl: './matched.page.html',
  styleUrls: ['./matched.page.scss'],
})
export class MatchedPage implements OnInit {
  yourInfo: YourInfo;
  private basedUrl = 'https://hackaichi2021.herokuapp.com/';
  token = new Token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6ImJhNDVlOWMyLTEzMDctNGFjNy05ZWYxLTg2MjA4YTVhM2MyMyIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTYzMTkwMDczNSwidXNlcl9pZCI6OX0.8k3HQHiN14PFhWxggtCARTmRkJqCkSenXagHoCNOI14", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzI1MDQ2MzUsInJlZnJlc2hfdXVpZCI6ImRkOTc4OTAyLTEzZjYtNGJmMC05NDVlLWVkNzFkZjdmODFkYiIsInVzZXJfaWQiOjl9.Q3Vgyf53dAK9SraUZKCqoMe-H0l5ttmGujnmGfz6_-8")


  email: string = "";
  constructor(private store: Store, private httpclient: HttpClient) {
    this.token = this.store.getToken()
    this.yourInfo = this.store.getYourInfo();
    this.email = this.yourInfo.email;
  }

  ngOnInit() {
  }

}
