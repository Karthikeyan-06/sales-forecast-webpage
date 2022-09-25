import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private _snackBar: MatSnackBar,

    ) { }

  ngOnInit(): void {
  }


  reloadCurrentPage() {
    this.router.navigate(['/'], { replaceUrl: true });
   }

  changecoloralllogin(){
    var element1 :any = document.getElementById("all");
    var element2 :any = document.getElementById("top-card");
    element1.classList.toggle("dark-mode-all");
    element2.classList.toggle("dark-mode-all");
  }


  dict : any={
    "a":"a",
    "karthi":"12345",
    "kantha":"2",
    "jeni":"3",
    "kaar":"4",
  }
  

  check(user:any,pass:any){
    
    if(user in this.dict){
      if(this.dict[user]==pass){
        this.router.navigate(['upload'])
      }
      else{
        this._snackBar.open("Wrong Password", "Close", { duration: 3000 });
      }
      
    }
    else{
      this._snackBar.open("Username Does not Exist", "Close", { duration: 3000 });
    
    }
  }
}
