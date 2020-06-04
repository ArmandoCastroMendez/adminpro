import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgresComponent } from './progres/progres.component';

const pagesRoutes: Routes = [
    {
        path: '', component: PagesComponent, children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'grafica1', component: Grafica1Component},
            { path: 'progress', component: ProgresComponent},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

        ]
    },

];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
