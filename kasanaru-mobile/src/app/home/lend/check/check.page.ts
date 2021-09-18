import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '../../../store/store';
import { LendAndBorrow } from 'src/app/models/lendAndborrow';
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
  testToken = new Token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6IjE2NDM3ZjE1LTBkMDAtNDZjOS1iZjI5LTYzMmU4MzhiMDEwOSIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTYzMTg0MzU0MSwidXNlcl9pZCI6M30.dzxYufEwr48yvUmR1gYAY3C6YsHowY9E-asCaWz8G-w", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzI0NDc0NDEsInJlZnJlc2hfdXVpZCI6ImEzYTFhNjQ5LTdiOWUtNDVkOC05YWQ1LWNmYTRlYjhmOTZkYyIsInVzZXJfaWQiOjN9.wz02B9Ze2Q9mFP9vwmcwtDfsjQIpOdiU_u5zW4Pg5xA")

  constructor(private httpclient: HttpClient, private store: Store, private router: Router) { }

  ngOnInit() {
  }

  postLendAndBorrow(x: number): void {
    this.store.setAfterOK(x);
    // ここで3つの情報が揃ったのでpostする
    console.log(this.store.getLendAndBorrow())

    var lendAndBorrow: LendAndBorrow = this.store.getLendAndBorrow()
    var body = { ...lendAndBorrow, ...this.testToken }
    var headers = new HttpHeaders()

    this.httpclient.post(`${this.basedUrl}api/user/matching`, body).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('home/lend/check/matched');
    });
  }

}
