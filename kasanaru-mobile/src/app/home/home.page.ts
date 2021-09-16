import { Component, OnInit } from '@angular/core';
import { Store } from '../store/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private store: Store) { }

  setLend(x: number): void {
    return this.store.setLend(x);
  }

  ngOnInit() {
  }

}
