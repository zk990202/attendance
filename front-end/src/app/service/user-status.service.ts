import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api.service';
import { ResponseData } from '../common/response-data'

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  private api_url ;
  private headers ;

  constructor(private http: Http, private apiService: ApiService) {
    this.api_url = apiService.getUrl() + '/api/status';
    this.headers = apiService.getHeaders();
  }

  getUserStatus(): Promise<ResponseData> {
    const url = `${this.api_url}`;
    return this.http
      .get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as ResponseData)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
}
  
}
