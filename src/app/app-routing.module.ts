import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddHikeComponent } from './hiking/add-hike/add-hike.component';
import { FutureComponent } from './hiking/future/future.component';
import { HikingComponent } from './hiking/hiking.component';
import { PastComponent } from './hiking/past/past.component';
import { HomeComponent } from './home/home.component';
import { WoodsFamilyComponent } from './woods-family/woods-family.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'hiking', component: HikingComponent, children: [
    {path: 'past', component: PastComponent},
    {path: 'future', component: FutureComponent},
    {path: 'add-hike', component: AddHikeComponent}
  ] },
  { path: 'woods-family', component: WoodsFamilyComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
