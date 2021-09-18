import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '../../../store/store';
import { LendAndBorrow } from 'src/app/models/lendAndBorrow';
import { Token } from 'src/app/models/token';
import { Router } from '@angular/router';
import { YourInfo } from '../../../models/yourInfo';
import { Favorite } from '../../../models/favorite';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  private basedUrl = 'https://hackaichi2021.herokuapp.com/';

  // あとで置き換える
  testToken = new Token(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6IjFlMGRiNTgxLTJiMWYtNDg5Ny1iMzkxLWM2NDgyYTQ4NzU1NCIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTYzMTc4MzY0MCwidXNlcl9pZCI6Mn0.xm5Wdro-DjcdGHUlFRm-L17hodbpsa-hTIrv6HeSh9E',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzIzODc1NDAsInJlZnJlc2hfdXVpZCI6IjYxNThhMjZkLTU2MjgtNGIzMi05YmQzLTI5OGQwYjNiYTc5NSIsInVzZXJfaWQiOjJ9.Ds69R712NC4dhXYKqaK5xB-ZUWEozQPtm0ScFccJAmY'
  );

  constructor(
    private httpclient: HttpClient,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit() { }

  parseFavorite(rawdata): Favorite {
    return new Favorite(rawdata.sex, rawdata.game, rawdata.sport, rawdata.book, rawdata.travel,
      rawdata.internet, rawdata.anime, rawdata.movie, rawdata.music,
      rawdata.gourmet, rawdata.muscle, rawdata.camp, rawdata.tv, rawdata.cook);
  }

  parseLendAndBorrow(rawdata): LendAndBorrow {
    return new LendAndBorrow(rawdata.latitude, rawdata.longitude, rawdata.lend, rawdata.after_arrival);
  }

  postLendAndBorrow(x: number): void {
    this.testToken = this.store.getToken();
    this.store.setAfterOK(x);
    // ここで3つの情報が揃ったのでpostする
    console.log(this.store.getLendAndBorrow());

    const lendAndBorrow: LendAndBorrow = this.store.getLendAndBorrow();
    const body = { ...lendAndBorrow, ...this.testToken };
    const headers = new HttpHeaders();

    this.httpclient
      .post<any>(`${this.basedUrl}api/user/matching`, body)
      .subscribe((res) => {
        console.log(res);
        this.store.setYourInfo(new YourInfo(res.user_id, this.parseLendAndBorrow(res.Info), this.parseFavorite(res.Favorite), res.username, res.Info.latitude, res.Info.longitude, res.email));
        this.router.navigateByUrl('home/borrow/check/matched');
      });
  }
}
