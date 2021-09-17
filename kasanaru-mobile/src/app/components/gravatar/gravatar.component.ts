import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-gravatar',
  templateUrl: './gravatar.component.html',
  styleUrls: ['./gravatar.component.scss'],
})
export class GravatarComponent implements OnInit, OnChanges {
  @Input() email: string = ""

  hashedEmail: string
  imageUrl: string = ""

  constructor(private httpclient: HttpClient) { }

  ngOnInit() { }

  ngOnChanges() {
    this.hashedEmail = Md5.hashStr(this.email)
    this.imageUrl = 'https://www.gravatar.com/avatar/' + this.hashedEmail
  }

}
