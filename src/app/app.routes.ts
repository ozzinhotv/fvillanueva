import { VidaComponent } from './pages/vida/vida.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing/landing-page.component';
import { EscritosComponent } from './pages/escritos/escritos.component';


export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'vida',
        component: VidaComponent
    },
    {
        path: 'obra',
        component: ObrasComponent
    },
    {
        path: 'escritos',
        component: EscritosComponent
    },
];
