import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }


  reloadCurrentPage() {
    this.router.navigate(['/login'], { replaceUrl: true });
   }
  
  changecolorall(){
    var element3 :any = document.getElementById("all");
    var element4 :any = document.getElementById("top-card");
    element3.classList.toggle("dark-mode-all");
    element4.classList.toggle("dark-mode-all");
  }
  

}
