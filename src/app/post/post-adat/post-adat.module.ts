import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostHttpService } from '../post-http.service';
import {PostAdatMegjelenitesComponent} from "./post-adat-megjelenites.component";
import {PostAdatRouting} from "./post-adat-routing";


@NgModule({
  declarations: [
    PostAdatMegjelenitesComponent
  ],
  imports: [
    CommonModule,
    PostAdatRouting
  ],
  exports: [
    PostAdatMegjelenitesComponent
  ],
  providers: [PostHttpService],
})
export class PostAdatModule { }
