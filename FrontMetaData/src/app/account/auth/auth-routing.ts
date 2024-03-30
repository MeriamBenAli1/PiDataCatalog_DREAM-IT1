import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
<<<<<<< HEAD
=======
import { SetPasswordComponent } from './set-password/set-password.component';
>>>>>>> 87a445450 (integration user cleaned)

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'reset-password',
        component: PasswordresetComponent
    },
<<<<<<< HEAD
=======
    {
        path: 'set-password/:token',
        component: SetPasswordComponent
    },
>>>>>>> 87a445450 (integration user cleaned)
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
