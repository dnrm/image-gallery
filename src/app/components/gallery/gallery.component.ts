import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images: any;

  constructor(private http: RequestsService) { }

  ngOnInit(): void {
    this.http.getImages()
      .subscribe((data => this.images = data));
  }

}
