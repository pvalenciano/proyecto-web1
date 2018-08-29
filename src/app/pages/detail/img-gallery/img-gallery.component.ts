import { Component, OnChanges } from '@angular/core';
import { ImageService } from '../../../services/image.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.css']
})
export class ImgGalleryComponent implements OnChanges {
  image: any;
  visibleImages: any[] = [];

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute
  ) {
    this.image = this.imageService.getImg(+this.route.snapshot.params['id']);
  }

  ngOnChanges() {
    this.image = this.imageService.getImg(+this.route.snapshot.params['id']);
  }

  nextScreen() {

    this.image = this.imageService.nextImg(+this.route.snapshot.params['id']);
    console.log("next: ",this.image);
  }
}
