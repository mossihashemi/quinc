import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogLeftSidebarComponent } from './blog-left-sidebar/blog-left-sidebar.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'left-sidebar',
        component: BlogLeftSidebarComponent
      },
      {
        path: 'details',
        component: BlogDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BlogRoutingModule { }
