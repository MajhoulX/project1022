import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Cursus1Component } from './cursus1/cursus1.component';
import { Cursus2Component } from './cursus2/cursus2.component';

export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'C', component: Cursus1Component},
    { path: 'Cursus-Complete', component: Cursus2Component},
    { path: '**', component: NotfoundComponent },
    
    


];
