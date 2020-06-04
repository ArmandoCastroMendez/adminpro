import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgresComponent } from './progres/progres.component';
import { Grafica1Component } from './grafica1/grafica1.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgresComponent,
        Grafica1Component,
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgresComponent,
        Grafica1Component,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES

    ]
})
export class PagesModule{ }
