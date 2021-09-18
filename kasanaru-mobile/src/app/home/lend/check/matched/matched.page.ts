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
  latlng: google.maps.LatLngLiteral
  constructor(private store: Store) {
    this.yourInfo = this.store.getYourInfo();
    this.latlng = this.yourInfo.latlng
    console.log(this.latlng)
  }

  ngOnInit() {
  }

}
