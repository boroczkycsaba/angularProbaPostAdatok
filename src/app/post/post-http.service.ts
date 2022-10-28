import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {filter, map} from 'rxjs';

@Injectable()
export class PostHttpService {

  postAdatURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPostHttpClient() {
    return this.http.get<any>(this.postAdatURL);
  }


  getPostTitleFindByIdFetchHttpClient(postAdatId: number) {
    console.debug("Post lekérdezési adat url:", this.postAdatURL + "/" + postAdatId);
    return this.getPostHttpClient().pipe(map((postAdatok: any) => postAdatok.filter((postAdat: any) => postAdat.id === postAdatId)));
  }

  getPostTitleMaxByIdFetchHttpClient(maxAdat: number) {
    console.debug("Post lekérdezési adat url:", this.postAdatURL);
    return this.getPostHttpClient().pipe(map((postAdatok: any) => postAdatok.filter((postAdat: any) => postAdat.id <= maxAdat)));
  }

}
