import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {
  public API = 'http://127.0.0.1:3000';
  public Dashboard_API = this.API + '/test';

  constructor(public http: HttpClient) {
  }

  getGoodDashboards(): Observable<any> {
      console.log(this.API + '/test');
      console.log(this.http.get(this.API + '/test'));
    return this.http.get(this.API + '/test');
  }
}
