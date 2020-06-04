import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NodefoundComponent } from './nodefound/nodefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule ({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        NodefoundComponent,
        SidebarComponent
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        NodefoundComponent,
        SidebarComponent
    ]

} )
export class SharedModule{ }

