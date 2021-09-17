import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
    registerForm = this.builder.group({
        email: ["", Validators.required],
        password: ["", Validators.required],
        username: ["", Validators.required],
        age: ["", Validators.required],    
    });

    constructor(private builder: FormBuilder) {}

    /**
     * POST to Server
     */
    register() {
        console.log(this.registerForm.value);
    }
    ngOnInit(): void {
    }
}