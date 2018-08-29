import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  public visibleImages = [];
  constructor() { }

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }
  getImg(id: number) {
    return IMAGES.slice(0).find(image => image.id == id);
  }
  nextImg(id:number){
    return IMAGES.slice(0).find(image => image.id == id+1);

  }
}
const IMAGES = [
  { "id": 1, "category": "wallpapers", "caption": "Glitch Wallpaper", "url": "assets/wallpaper.jpg " },
  { "id": 2, "category": "cats", "caption": "obscurecat makeup 1", "url": "assets/gato-maquillaje.jpeg " },
  { "id": 3, "category": "cats", "caption": "obscurecat makeup 2", "url": "assets/gato-maquillaje1.jpeg" },
  { "id": 4, "category": "cats", "caption": "obscurecat makeup 3", "url": "assets/gato-maquillaje2.jpeg" },
  { "id": 5, "category": "cats", "caption": "obscurecat makeup 4", "url": "assets/gato-maquillaje3.jpeg" },
  { "id": 6, "category": "cats", "caption": "obscurecat makeup 4", "url": "assets/gato-maquillaje3.jpeg" },
  { "id": 7, "category": "cats", "caption": "obscurecat elegato", "url": "assets/elegato1.png" },
  { "id": 8, "category": "cats", "caption": "obscurecat elegato", "url": "assets/elegato2.png" },
  { "id": 9, "category": "cats", "caption": "obscurecat elegato", "url": "assets/elegato3.png" },
  { "id": 10, "category": "cats", "caption": "obscurecat elegato", "url": "assets/elegato4.png" },
  { "id": 11, "category": "cats", "caption": "obscurecat elegato", "url": "assets/elegato5.png" },
  { "id": 12, "category": "cats", "caption": "obscurecat elegato", "url": "assets/elegato6.png" }



]
