import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p_c_Input';

  myFavoriteMovies = [ 'Encanto', 
  'Spider-Man: No Way Home', 
  "Harry Potter and the Sorcerer's Stone" ];
  selectedMovieToWatch(data: string) {
    debugger;
    alert(data);
  }
}
