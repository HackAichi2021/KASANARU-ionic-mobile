import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../../store/store';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  constructor(private httpclient: HttpClient, private store: Store) { }

  ngOnInit() {
  }

  postLendAndBorrow(x: number): void {
    this.store.setAfterOK(x);
    // ここで3つの情報が揃ったのでpostする
  }

}
