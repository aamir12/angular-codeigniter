import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';

const routes: Routes = [
  { path: 'blog', component: BlogpostListComponent },
  { path: 'blog/:id', component: BlogpostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogpostRoutingModule {}
