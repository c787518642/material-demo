import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MatCheckboxModule, MatRadioModule, MatSelectModule, MatInputModule, MatToolbarModule, MatButtonModule, MatDividerModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { PostsComponent } from './pages/posts/posts.component';
import { ErrorPagesComponent } from './error-pages/error-pages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    DashboardComponent,
    PostsComponent,
    ErrorPagesComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "demo" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
