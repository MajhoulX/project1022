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
import { PortalLayoutComponent as PortalLayoutComponent } from './portal-layout/portal-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'onboarding', component: OnboardingComponent, canActivate: [authGuard] },
    {
        path: 'portal',
        component: PortalLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'choix', component: ChoiceComponent },
            { path: 'programmes', component: ProgramsComponent },
            { path: 'inscription', component: RegistrationComponent },
            { path: 'profil', component: ProfileComponent },
            { path: 'cursus', component: CurriculumComponent },
            { path: 'frais', component: PaymentComponent },
            { path: '**', redirectTo: '/portal/dashboard' }
        ]
    },
    { path: 'error', component: NotfoundComponent },
    { path: '**', redirectTo: "/portal" }
];
