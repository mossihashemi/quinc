import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module'

import { BlogLeftSidebarComponent } from './blog-left-sidebar/blog-left-sidebar.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogLeftSidebarComponent,
    BlogDetailsComponent
  ]
})
export class BlogModule { }
