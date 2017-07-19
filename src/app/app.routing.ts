import { PortalComponent } from './portal/portal.component';
import { AppComponent } from './app.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: 'index/:company_id', component: PortalComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);