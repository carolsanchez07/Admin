import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard, AdminGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { MedicsComponent } from './medics/medics/medics.component';
import { MedicComponent } from './medics/medics/medic.component';
import { SearchComponent } from './search/search.component';
import { VerifyTokenGuard } from '../services/guards/verify-token.guard';


const PagesRoutes: Routes = [

    { path: 'account-settings', component: AccountSettingsComponent, canActivate:[VerifyTokenGuard] ,data: { titulo: "Ajustes" } },
    { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de Usuario' } },
    { path: 'dashboard', component: DashboardComponent, data: { titulo: "Dashboard" } },
    { path: 'graphics1', component: Graphics1Component, data: { titulo: "Graficas" } },
    { path: 'progress', component: ProgressComponent, data: { titulo: "Progress" } },
    { path: 'promesas', component: PromesasComponent, data: { titulo: "Promesas" } },
    { path: 'rxjs', component: RxjsComponent, data: { titulo: "Rxjs" } },
    { path: 'search/:value', component: SearchComponent, data: { titulo: "Busqueda" } },

    //Mantenimiento
    {
        canActivate: [AdminGuard],
        path: 'users',
        component: UsersComponent,
        data: { titulo: 'Mantenimiento de Usuarios' }
    },
    { path: 'hospitals', component: HospitalsComponent, data: { titulo: 'Mantenimiento de Hospitales' } },
    { path: 'medics', component: MedicsComponent, data: { titulo: 'Mantenimiento de Médicos' } },
    { path: 'medic/:id', component: MedicComponent, data: { titulo: 'Actualizar Médico' } },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },



]

export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes)