import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdIconModule, MdSidenavModule, MdCardModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
