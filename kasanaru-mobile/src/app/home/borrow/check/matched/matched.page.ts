import { Component, OnInit } from '@angular/core';
import { Store } from '../../../../store/store';
import { YourInfo } from '../../../../models/yourInfo';

@Component({
  selector: 'app-matched',
  templateUrl: './matched.page.html',
  styleUrls: ['./matched.page.scss'],
})
export class MatchedPage implements OnInit {
  yourInfo: YourInfo;
  email: string = "";
  constructor(private store: Store) {
    this.yourInfo = this.store.getYourInfo();
    console.log(this.email);
    this.email = this.yourInfo.email;
    console.log(this.email);
    console.log("hello")
  }

  ngOnInit() {
  }

}
