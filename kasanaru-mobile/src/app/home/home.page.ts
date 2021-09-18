import { Component, OnInit } from '@angular/core';
import { Store } from '../store/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public loginUserName: string;

  constructor(private store: Store) {
    this.getUserName();
  }

  setLend(x: number): void {
    return this.store.setLend(x);
  }

  getUserName(): void {
    /* ユーザ情報をどこかで取得したらlocalStorageにユーザ名を格納 */
    this.loginUserName = localStorage.getItem('userName');
    console.log(this.loginUserName);
  }
  ngOnInit() {
    this.getUserName();
  }

}

