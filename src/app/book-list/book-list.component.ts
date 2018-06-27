import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../service';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: [],
  providers:[BookService]
})
export class BookListComponent implements OnInit {

  nbBooks: number;
  books: Book[];
  // books = [
  //   {
  //     id: '1',
  //     title : 'title',
  //     description : 'description',
  //     imageURL: 'https://images-na.ssl-images-amazon.com/images/I/51fEYMhtHoL.jpg'
  //   },
  //   {
  //     id: '2',
  //     title : 'title 2',
  //     description : 'description 2',
  //     imageURL: 'https://images-na.ssl-images-amazon.com/images/I/51fEYMhtHoL.jpg'
  //   }

  // ];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.countBooks().subscribe(nbBooks => this.nbBooks = nbBooks);
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

}
