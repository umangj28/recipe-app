import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

// export class SignupComponent implements OnInit {
//   logindeatils: any = { username: '', password: '' }
//   error: any = { uname: false, pwd: false }
//   constructor(private http:HttpClient) { }

//   ngOnInit(): void {
//   }
//   reg() {
//     let hasser = false;
//     if (this.logindeatils.username == undefined || this.logindeatils.username == "") {
//       this.error.uname = "required"
//       hasser = true;

//     } else {
//       this.error.uname = false;
//     }

//     if (this.logindeatils.password == undefined || this.logindeatils.password == "") {
//       this.error.pwd = "required"
//       hasser = true;
//     } else {
//       this.error.pwd = false;
//     }

//       if(hasser == false){
//         this.router.navigate(['/admin']);
//         console.log(this.error);
//         console.log(this.logindeatils)
//       }
//       var fd = new FormData();
//       fd.set("name",this.logindeatils.name);
//       fd.set("name",this.logindeatils.name);
//       fd.set("name",this.logindeatils.name);
//       fd.set("name",this.logindeatils.name);
//       this.http.post("http://localhost:9005/admin/addRegister",fd).subscribe((data:any)=>{
//         console.log(data)
//       })

//   }
// }
// // import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
export class SignupComponent implements OnInit {
  Registerdetails:any={name:"",email:"",password:"",repassword:""}
  error: any = { em: false, pwd: false, ename:false, rpwd:false }
  constructor(public router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }
  register(){
    let hasser = false;
    if (this.Registerdetails.email == undefined || this.Registerdetails.email == "") {
      this.error.em = "required"
      hasser = true;

    } else {
      this.error.em = false;
    }
    if (this.Registerdetails.name == undefined || this.Registerdetails.name == "") {
      this.error.ename = "required"
      hasser = true;

    } else {
      this.error.ename = false;
    }
    if (this.Registerdetails.password == undefined || this.Registerdetails.password == "") {
      this.error.pwd = "required"
      hasser = true;

    } else {
      this.error.pwd = false;
    }
    if (this.Registerdetails.repassword == undefined || this.Registerdetails.repassword == "") {
      this.error.rpwd = "required"
      hasser = true;
    }      
    else if(this.Registerdetails.repassword!=this.Registerdetails.password){
      window.alert('Passwords do not match');
      this.error.rpwd = "required"
      hasser = true;
    
    } else {
      this.error.rpwd = false;
    }
    var fd = new FormData();
    fd.set("name",this.Registerdetails.name);
    fd.set("email",this.Registerdetails.email);
    fd.set("password",this.Registerdetails.password);
    //  this.router.navigate(['/login']);
    this.http.post("http://localhost:9005/admin/addRegister",fd).subscribe((data:any)=>{console.log(data)
    if(data.success && hasser==false){
      //this.success='success';
       this.router.navigate(['/login']);
      window.alert("added successfully");
      this.Registerdetails={name:"",email:"",password:""};
    }
    
  });
  }
}
