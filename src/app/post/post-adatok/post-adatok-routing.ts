import {RouterModule, Routes} from "@angular/router";
import {PostAdatokMegjeleniteseComponent} from "./post-adatok-megjelenitese.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: PostAdatokMegjeleniteseComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostAdatokRouting {}
