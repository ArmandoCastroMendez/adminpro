import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NodefoundComponent } from './shared/nodefound/nodefound.component';


const appRoutes: Routes = [
    { path: '', component: PagesComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NodefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
