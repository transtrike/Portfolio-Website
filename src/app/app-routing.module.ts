import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './components/information/information.component';

import { InitialsComponent } from './components/initials/initials.component';

const routes: Routes = [
  { path: 'initials', component: InitialsComponent},
  { path: 'about-me', component: InformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
