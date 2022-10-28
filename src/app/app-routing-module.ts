import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {
    path: 'posts',
    loadChildren: () => import('./post/post-adatok/post-adatok.module').then(m => m.PostAdatokModule),
    pathMatch: 'full',
  },
  {
    path: 'posts/adat',
    loadChildren: () => import('./post/post-adat/post-adat.module').then(m => m.PostAdatModule)
  },
  {path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
