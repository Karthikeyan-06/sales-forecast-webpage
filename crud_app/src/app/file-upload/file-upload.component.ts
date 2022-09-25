import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('fileSelect') myInputVariable?: ElementRef;
  
  filename: any;
  format: any;
  formfile: any;
  file:any;
  showLoader: boolean = false;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  
  use(z:any){
    this._snackBar.open("Please select The CSV file "+z, "Close", { duration: 3000 });

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
  
  

  onFileSelect(event: any) {
    try {
       this.file = event.target.files[0];
      if (this.file) {
        this.filename = this.file.name;
        this.format = this.file.name.split('.');
        // this.format = this.format[1];
        if (this.format[1] != 'csv') {
          this._snackBar.open("Please select only CSV file", "Close", { duration: 3000 });
          this.deleteFile();
        } else {
          this.formfile = new FormData();
          this.formfile.append('file', this.file);
          console.log("🎯TC🎯 ~ file: file-upload.component.ts ~ line 41 ~ this.formfile", this.formfile);
        }
      }
    } catch (error) {
      this.deleteFile();
      console.log('no file was selected...');
    }
  }
  fileUpload() {
    alert
    if (this.file) {
      this.showLoader = true;
      let url = "http://localhost:5000/api/file_upload"
      this.http.post(url, this.formfile).subscribe((res) => {
        this.showLoader = false;
        this._snackBar.open("File successfully uploaded", "Ok", { duration: 5000 });
        this.router.navigate(['dash'])
      },
        (error) => {
          this.showLoader = false;
          this._snackBar.open(error.message, "Close", { duration: 5000 });
        });
    }else{
      this._snackBar.open("Please select the file", "Ok", { duration: 3000 });
    }
  }
  deleteFile(){
    this.file = null;
    this.format = null;
    this.filename = null;
    this.formfile.delete('file');
    // this.fileSelect
  }
}