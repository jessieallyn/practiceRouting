import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HikingComponent } from './hiking/hiking.component';
import { WoodsFamilyComponent } from './woods-family/woods-family.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FutureComponent } from './hiking/future/future.component';
import { PastComponent } from './hiking/past/past.component';
import { AddHikeComponent } from './hiking/add-hike/add-hike.component';

@NgModule({
  declarations: [
    AppComponent,
    WoodsFamilyComponent,
    HikingComponent,
    HomeComponent,
    NavigationComponent,
    FutureComponent,
    PastComponent,
    AddHikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
