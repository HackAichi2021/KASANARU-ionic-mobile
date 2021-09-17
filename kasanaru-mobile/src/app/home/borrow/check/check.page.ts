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

  // あとで置き換える(Tanaka)
  testToken = new Token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6Ijc1M2IyM2UxLTYxNTQtNDZiZC1iNDNkLTI3NDUyZmI0Y2Q1ZSIsImF1dGhvcml6ZWQiOnRydWUsImV4cCI6MTYzMTg2MDk5MywidXNlcl9pZCI6NH0.cdyPetMQgrr7xUQzRvpeHSthqYbqz7ufXLaiwSkst0U", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzI0NjQ4OTMsInJlZnJlc2hfdXVpZCI6IjJhZmY3ZDcxLTE4OTAtNDIwMy04Yjg0LTY5OTg0ZWI2Mzc3MyIsInVzZXJfaWQiOjR9.Zn_Ia9-uyLRKjK06QLRSJ8u2NJGw3yhk8XStENjgpK0")

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
      this.router.navigateByUrl('borrow_matched');
    });
  }

}
