import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostAdatokRouting} from "./post-adatok-routing";
import {PostHttpService} from "../post-http.service";
import {PostAdatokMegjeleniteseComponent} from "./post-adatok-megjelenitese.component";

@NgModule({
  declarations: [
    PostAdatokMegjeleniteseComponent
  ],
  imports: [
    CommonModule,
    PostAdatokRouting
  ],
  exports: [
    PostAdatokMegjeleniteseComponent
  ],
  providers: [PostHttpService],
})
export class PostAdatokModule { }
