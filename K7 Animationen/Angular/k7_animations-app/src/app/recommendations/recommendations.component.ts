import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../actions/count.actions';
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
  count: number = 0;
    
  constructor(private service: RecommendationsService, private store: Store<{count: number}>) {

    this.store.select("count").subscribe((data) => {
      this.count = data
    })
   }

  public inDenWarenkorb(){
    this.store.dispatch(increment())
  }

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
  

