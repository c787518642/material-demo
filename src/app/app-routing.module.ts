import { TreeComponent } from './pages/tree/tree.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ErrorPagesComponent } from './error-pages/error-pages.component';

const routes: Routes = [
  {
    path: 'pages',
    component: LayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "posts/:id", component: PostsComponent },
      { path: "posts", component: PostsComponent },
      { path: "tree", component: TreeComponent },
      { path: "error", component: ErrorPagesComponent },
      { path: "", redirectTo: "dashboard", pathMatch: 'full' },
      { path: "**", redirectTo: "dashboard" }
    ]
  },
  { path: '', redirectTo: "pages", pathMatch: "full" },
  { path: '**', redirectTo: "pages" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
