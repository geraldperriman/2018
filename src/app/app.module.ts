import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first.component';
import { PostsComponent } from './posts/posts.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'firstComponent',
    pathMatch: 'full'
  },
  {
    path: 'firstComponent',
    component: FirstComponent,
  },
  {
    path: 'posts',
    component: PostsComponent
  }

];

@NgModule({
  declarations: [
    FirstComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FirstComponent]
})
export class AppModule { }
