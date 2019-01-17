import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SearchPageComponent } from './search-page/search-page.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'search-page', component: SearchPageComponent },
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);