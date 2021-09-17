import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Validators } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { User } from "../models/user";
import { Store } from "../store/store";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private basedUrl = 'https://hackaichi2021.herokuapp.com/';
  loginForm: FormGroup;
  private message = "Text";

  constructor(private builder: FormBuilder, private http: HttpClient,
    private store: Store, private router: Router) {
    this.loginForm = this.builder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.message = this.store.getMessage();
  }

  // get
  getData(): void {
    this.http.get<User>(this.basedUrl).subscribe(res => {
      console.log(res);
    });
  }

  // post
  login(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: "response"
    }
    this.http.post<any>(`${this.basedUrl}api/user/login`,
      JSON.stringify(this.loginForm.value)).subscribe(
        (res) => {
          console.log(res);
          
          if (res.status == "Success") {
            console.log("Success!");
            localStorage.setItem("access_token", res.access_token);
            localStorage.setItem("refresh_token", res.refresh_token);
            localStorage.setItem("username", res.username);
            localStorage.setItem("age", res.age);
            return this.router.navigate(["/home"]);
          } else {
            console.log("Failed");
          }
        }
      );

  }
  // dataのset
  setMessage(): void {
    this.store.setMessage('change');
    this.message = this.store.getMessage();
  }

  ngOnInit(): void {
  }

}
