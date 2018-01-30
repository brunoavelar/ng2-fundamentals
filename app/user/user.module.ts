import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    exports: [],
    declarations: [ 
        ProfileComponent ,
        LoginComponent
    ],
    providers: [],
})
export class UserModule { }
