// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
    
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  posts:any;
   
  constructor(private http: HttpClient) { }
   
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.posts=[{
      id:"01",
      title:"A",
      body:"A"},{
        id:"02",
        title:"abc",
        body:"B"
      },];
    
    // this.http.get('http://jsonplaceholder.typicode.com/posts')
    //   .subscribe(posts => {
    //     this.posts = posts;
    // });
   
  }
   
}