import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

    private url = 'https://localhost:7281/Recommendation';
    
    constructor(private httpClient: HttpClient) { }
    
    getRecommendations()  {
      return this.httpClient.get(this.url);
  }
}
