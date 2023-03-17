import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  movieList: Array<string> = [];

  @Output()
  movieSelectedEventEmitter =  new EventEmitter();

  movieSelected(selectedMovie: string) {
    this.movieSelectedEventEmitter.emit(selectedMovie);
   }
}
