import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {PostHttpService} from "../post-http.service";

@Component({
  selector: 'app-post-adat-megjelenites',
  templateUrl: './post-adat-megjelenites.component.html',
  styleUrls: ['../../app.component.css','./post-adat-megjelenites.component.css']
})
export class PostAdatMegjelenitesComponent implements OnInit {

  postShowAdat: any | undefined;


  constructor(private postHttpService: PostHttpService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        const postAdatId = Number(params.get('id'));
        this.postHttpService.getPostTitleFindByIdFetchHttpClient(postAdatId).subscribe(
          (postAdat: any) => {
            this.postShowAdat = postAdat[0]
          }
        )
      }
    })
  }

  adatReszBezarasa() {
    this.postShowAdat = null;
    this.router.navigate(['/posts']);
  }

}
