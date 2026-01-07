import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDashboardComponent } from './shared/components/movie-dashboard/movie-dashboard.component';
import { MovieComponent } from './shared/components/movie/movie.component';
import{MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MobileDashboardComponent } from './shared/components/mobile-dashboard/mobile-dashboard.component';
import { MobileComponent } from './shared/components/mobile/mobile.component';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { PostComponent } from './shared/components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashboardComponent,
    MovieComponent,
    MobileDashboardComponent,
    MobileComponent,
    PostDashboardComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
