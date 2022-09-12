import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RecommendationsService } from '../services/recommendations.service';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements  AfterViewInit  {

  isLoaded : boolean = false;
  items : any;
  error : any; 

  url : string = 'https://localhost:7281/Recommendation';
    
  constructor(private service: RecommendationsService) { }

  ngAfterViewInit(): void {
      this.service.getRecommendations()
      .subscribe({
        next: (items) => {
          this.items = items;
          this.isLoaded = true
        },
        error: (error) => {
          this.error = error;
          this.isLoaded = true
        }
      }); 
  }
}
  

