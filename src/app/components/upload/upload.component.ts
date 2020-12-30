import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [FormBuilder, UploadService]
})
export class UploadComponent implements OnInit {

  public filesToUpload: Array<File>;
  public url: string;
  public status: string;

  constructor(private uploadService: UploadService) {
    this.url = `http://${location.hostname}/app/api/upload`;
  }

  ngOnInit(): void {
  }

  onFileSelect(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  onSubmit(form) {
    this.uploadService.uploadFile(this.url, [], this.filesToUpload, 'image')
      .then((result: any) => {
        this.status = 'success';
        console.log(result);
      })
      console.log(form.value);
      form.reset(); 
  }

}
