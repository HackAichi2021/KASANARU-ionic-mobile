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

  // あとで置き換える(Yamada)
  testToken = new Token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6Ijg1YzhhYTc5LWRjMzctNGUxNS1hYmZlLWM2MzRjZTEzZWMxYiIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTYzMTg2MDgyMSwidXNlcl9pZCI6NX0.5w-htDk7tsaOPGu9yMeDhLcO6ITVgQl_wsz8-kSoacw", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzI0NjQ3MjEsInJlZnJlc2hfdXVpZCI6Ijc0MWYxNjFjLWM0YzQtNDZiMC1iZmY3LWE4OTM4ZTAyYWM3NiIsInVzZXJfaWQiOjV9.rOoEGL9cf_Z5ld7KkqkRNGmRpEfXwYFOuAuUCbhUcug")

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
      this.router.navigateByUrl('lend_matched');
    });
  }

}
