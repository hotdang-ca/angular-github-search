import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;

  // angular-github-search on github/@hotdang-ca
  private CLIENT_ID: string = 'ab9e35ca01bd0e2cf41a';
  private CLIENT_SECRET: string = '73aab52b248b12a75059a3a956e8386fb638ff29';

  constructor(private _http: Http) {
    this.username = 'hotdang-ca';
    console.log('Github Service Ready...');
  }

  getUser() {
    return this._http.get(`https://api.github.com/users/${this.username}?client_id=${this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}`)
      .map(res => res.json());
  }
}
