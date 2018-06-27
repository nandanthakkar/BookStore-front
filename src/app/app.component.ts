import { Component } from '@angular/core';
import { BookService } from './service';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styles: [],
  providers:[BookService]
})
export class AppComponent {
  title = 'Book Store';
}
