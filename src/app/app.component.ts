import { Component } from '@angular/core';
import { Product } from './models/product';
import { CommentsService } from './services/comments.service';
import { PhotosService } from './services/photos.service';
import { PostsService } from './services/posts.service';
import { ProductService } from './services/product.service';
import { TodosService } from './services/todos.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-services-app';
  products: Product[];
  userList:any[];
  photos:any[];
  comments:any[];
  posts:any[];
  todos:any[];


  constructor(private productService: ProductService, 
              private userService: UserService,
              private photoService: PhotosService,
              private commentService: CommentsService,
              private postService: PostsService,
              private todoService: TodosService
              ){
  }

  getProducts(){
    this.products = this.productService.getProducts();
  }

  getUsers(){
    this.userService.getUsers().subscribe(response =>{
      this.userList = response as any;
      console.log(this.userList)
    })
  }

  getPhotos(){
    this.photoService.getPhotos().subscribe(response =>{
      this.photos = response as any;
    })
  }

  getComments(){
    this.commentService.getComments().subscribe(response =>{
      this.comments = response as any;
    })
  }

  getPosts(){
    this.postService.getPosts().subscribe(response => {
      this.posts = response as any;
    })
  }

  getTodos(){
    this.todoService.getTodos().subscribe(response =>{
      console.log(this)
      this.todos = response as any;
    })
  }

  getTodosUsingFunction(){
    var self = this;
    self.todoService.getTodos().subscribe(function(response){
      console.log(self)
      self.todos = response as any;  
    })
  }
}
