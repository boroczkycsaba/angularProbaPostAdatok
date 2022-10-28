import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostAdatMegjelenitesComponent} from "./post-adat-megjelenites.component";

const routes: Routes = [
  {
    path: ':id',
    component: PostAdatMegjelenitesComponent
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostAdatRouting {
}
