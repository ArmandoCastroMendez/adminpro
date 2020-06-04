import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgresComponent } from './pages/progres/progres.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NodefoundComponent } from './shared/nodefound/nodefound.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const appRoutes: Routes = [
    {
        path: '', component: PagesComponent, children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'grafica1', component: Grafica1Component},
            { path: 'progress', component: ProgresComponent},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

        ]
    },
    { path: '', component: PagesComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NodefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
