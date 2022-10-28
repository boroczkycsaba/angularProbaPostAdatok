import {Component, OnInit} from '@angular/core';
import {PostHttpService} from "../post-http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-adatok-megjelenitese',
  templateUrl: './post-adatok-megjelenitese.component.html',
  styleUrls: ['../../app.component.css', './post-adatok-megjelenitese.component.css']
})
export class PostAdatokMegjeleniteseComponent implements OnInit {

  postAdatok: any = [];

  constructor(private postHttpService: PostHttpService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.postHttpService
      .getPostTitleMaxByIdFetchHttpClient(10)
      .subscribe((postLekerdezettAdatok: any) => this.postAdatok = postLekerdezettAdatok);
  }

  adatTorlese(postAdat: any): void {
    const index = this.postAdatok.indexOf(postAdat);
    if (index > -1) {
      console.debug("Töröltük a következő elemet:", postAdat.title)
      this.postAdatok.splice(index, 1);
    }
  }

  reszletesAdatokNav(postAdat: any) {
    this.router.navigate(['adat', postAdat.id], {relativeTo: this.route});
  }
}
