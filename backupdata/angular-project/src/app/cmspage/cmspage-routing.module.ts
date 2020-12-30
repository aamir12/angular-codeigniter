import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {path: 'page/:slug', component: PageComponent},
  {path: 'contact', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspageRoutingModule { }
