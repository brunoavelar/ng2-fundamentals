import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'app/user/login.component.html'
})

export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    login(formsValues){
        console.log(formsValues);
    }
}