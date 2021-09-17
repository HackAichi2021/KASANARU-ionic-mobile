import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '../../../store/store';
import { LendAndBorrow } from 'src/app/models/lendAndBorrow';
import { Token } from 'src/app/models/token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  private basedUrl = 'https://hackaichi2021.herokuapp.com/';

  // あとで置き換える
  testToken = new Token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6IjFlMGRiNTgxLTJiMWYtNDg5Ny1iMzkxLWM2NDgyYTQ4NzU1NCIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTYzMTc4MzY0MCwidXNlcl9pZCI6Mn0.xm5Wdro-DjcdGHUlFRm-L17hodbpsa-hTIrv6HeSh9E", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzIzODc1NDAsInJlZnJlc2hfdXVpZCI6IjYxNThhMjZkLTU2MjgtNGIzMi05YmQzLTI5OGQwYjNiYTc5NSIsInVzZXJfaWQiOjJ9.Ds69R712NC4dhXYKqaK5xB-ZUWEozQPtm0ScFccJAmY")

  constructor(private httpclient: HttpClient, private store: Store, private router: Router) { }

  ngOnInit() { }

  postLendAndBorrow(x: number): void {
    this.store.setAfterOK(x);
    // ここで3つの情報が揃ったのでpostする
    console.log(this.store.getLendAndBorrow())

    var lendAndBorrow: LendAndBorrow = this.store.getLendAndBorrow()
    var body = { ...lendAndBorrow, ...this.testToken }
    var headers = new HttpHeaders()

    this.httpclient.post(`${this.basedUrl}api/user/matching`, body, {
      headers: headers.set('Access-Control-Allow-Origin', '*'),
    }).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('home/borrow/check/matched');
    });
  }

}
