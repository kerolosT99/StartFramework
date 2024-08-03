import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GallaryComponent } from './gallary/gallary.component';

export const routes: Routes = [
    { path: "", redirectTo: 'home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent },
    { path: "portfolio", component: PortfolioComponent },
    { path: "gallary", component: GallaryComponent },
    { path: "**", redirectTo: 'home', pathMatch: 'full' }
];
