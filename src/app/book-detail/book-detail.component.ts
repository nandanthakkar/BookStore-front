import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book, BookService } from '../service';
import { finalize, map, switchMap } from 'rxjs/operators';
import  'rxjs/operator';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {
  book: Book;
  num: number
  constructor(private router: Router, private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {

    
    //this.route.params.subscribe(params => this.book = this.bookService.getBook(params['bookId']));
    this.route.params.subscribe(params =>this.num = params['bookId'])
    console.log(this.num);
      
    this.bookService.getBook(this.num).subscribe(mybook => this.book = mybook);
    console.log(this.book.language);
    console.log(this.book.isbn);
    //this.route.params.
  }

  delete() {
    // invoke REST API
    try {
      this.bookService.deleteBook(this.num)
      .pipe(finalize(() => this.router.navigate(['/book-list']) ))
      .subscribe();
     } catch (error) {
      console.log(error); 
    }
    
    
  }

}
