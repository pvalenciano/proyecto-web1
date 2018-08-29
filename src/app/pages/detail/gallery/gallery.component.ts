import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../../../services/image.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  title = "Gallery";
  visibleImages: any[] = [];
  image: any;

  @Input() filterBy?: string = 'all';
  public modalOn: boolean = false;

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
