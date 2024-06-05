import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindeatils: any = { email: '', password: '' }
  error: any = { uname: false, pwd: false }
  constructor(public router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }


  login() {
    let hasser = false;
    if (this.logindeatils.email == undefined || this.logindeatils.email == "") {
      this.error.uname = "required"
      hasser = true;

    } else {
      this.error.uname = false;
    }

    if (this.logindeatils.password == undefined || this.logindeatils.password == "") {
      this.error.pwd = "required"
      hasser = true;
    } else {
      this.error.pwd = false;
    }

      // if(hasser == false){
      //   // this.router.navigate(['/admin']);
      //   console.log(this.error);
      //   console.log(this.logindeatils)
      // }
      var fd = new FormData();
      fd.set("email",this.logindeatils.email);
      fd.set("password",this.logindeatils.password);
      // fd.set("name",this.logindeatils.name);
      // fd.set("name",this.logindeatils.name);
      this.http.post("http://localhost:9005/admin/validateSuperAdmin",fd).subscribe((data:any)=>{
        console.log(data)
        if(data.success && hasser == false){
          this.router.navigate(['/newhome']);
        }
        else{
          window.alert("invalid email or password");
        }
      })

  }

}
