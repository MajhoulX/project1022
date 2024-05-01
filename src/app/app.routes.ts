import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaymentComponent } from './payment/payment.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProgramsComponent } from './programs/programs.component';
import { ChoiceComponent } from './choice/choice.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { Cursus1Component } from './cursus1/cursus1.component';
import { Cursus2Component } from './cursus2/cursus2.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'step1', component: Cursus1Component },
    { path: 'step2', component: Cursus2Component },
    {
        path: 'dashboard',
        component: DashboardLayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'choix', component: ChoiceComponent },
            { path: 'programmes', component: ProgramsComponent },
            { path: 'inscription', component: RegistrationComponent },
            { path: 'profil', component: ProfileComponent },
            { path: 'cursus', component: CurriculumComponent },
            { path: 'frais', component: PaymentComponent },
            { path: '**', redirectTo: '/dashboard/' }
        ]
    },
    { path: 'error', component: NotfoundComponent },
    { path: '**', redirectTo: "/error" }
];
