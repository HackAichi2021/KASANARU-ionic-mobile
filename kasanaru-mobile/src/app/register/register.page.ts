import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Validators } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { User } from "../models/user";
import { Store } from "../store/store";

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
    private basedUrl = 'https://hackaichi2021.herokuapp.com/';
    registerForm: FormGroup;
    private message = "Text";

    // Input to User Model

    constructor(private builder: FormBuilder, private http: HttpClient, private store: Store, private router: Router) {
        this.registerForm = this.builder.group({
            email: ["", Validators.required],
            password: ["", Validators.required],
            username: ["", Validators.required],
            age: ["", Validators.required],
        });
        this.message = this.store.getMessage();
    }

    /**
     * POST to Server
     */
    register(): void {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            observe: "response"
        }
        this.http.post<any>(`${this.basedUrl}api/user/register`,
            JSON.stringify(this.registerForm.value)).subscribe(
                (res) => {
                    if (res.status == "Success") {
                        console.log("Success!");
                        localStorage.setItem("access_token", res.access_token);
                        localStorage.setItem("refresh_token", res.refresh_token);
                        localStorage.setItem('userName', this.registerForm.value.username);
                        this.store.setToken(res.access_token, res.refresh_token);
                        return this.router.navigate(["/login"]);
                    } else {
                        console.log("Failed");
                    }
                }
            );
    }
    ngOnInit(): void {
    }
}