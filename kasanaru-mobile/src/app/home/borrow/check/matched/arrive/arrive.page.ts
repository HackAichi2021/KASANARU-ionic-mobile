import { Component, OnInit } from '@angular/core';
import { Store } from '../../../../../store/store';
import { YourInfo } from '../../../../../models/yourInfo';
import { LendAndBorrow } from '../../../../../models/lendAndBorrow';
import { Favorite } from '../../../../../models/favorite';

@Component({
  selector: 'app-arrive',
  templateUrl: './arrive.page.html',
  styleUrls: ['./arrive.page.scss'],
})
export class ArrivePage implements OnInit {
  email: string = "";
  yourInfo = new YourInfo(-1, new LendAndBorrow(0, 0, 0, 40),
    new Favorite(0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0), 'tarou', 0, 0, "exemple@example.com");
  yourFavorite: string[] = [];
  constructor(private store: Store) {
    this.yourInfo = this.store.getYourInfo();
    if (this.yourInfo.favorite.game) { this.yourFavorite.push('ゲーム'); }
    if (this.yourInfo.favorite.sport) { this.yourFavorite.push('スポーツ'); }
    if (this.yourInfo.favorite.book) { this.yourFavorite.push('読書'); }
    if (this.yourInfo.favorite.travel) { this.yourFavorite.push('旅行'); }
    if (this.yourInfo.favorite.internet) { this.yourFavorite.push('インターネット'); }
    if (this.yourInfo.favorite.anime) { this.yourFavorite.push('アニメ'); }
    if (this.yourInfo.favorite.movie) { this.yourFavorite.push('映画'); }
    if (this.yourInfo.favorite.music) { this.yourFavorite.push('音楽'); }
    if (this.yourInfo.favorite.gourmet) { this.yourFavorite.push('グルメ'); }
    if (this.yourInfo.favorite.muscle) { this.yourFavorite.push('筋トレ'); }
    if (this.yourInfo.favorite.camp) { this.yourFavorite.push('キャンプ'); }
    if (this.yourInfo.favorite.tv) { this.yourFavorite.push('テレビ'); }
    if (this.yourInfo.favorite.cook) { this.yourFavorite.push('料理'); }
    this.email = this.yourInfo.email;
  }

  ngOnInit() {
  }

}
