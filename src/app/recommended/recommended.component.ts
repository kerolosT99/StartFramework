import { Component } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent {
  recommendedList: Product[] = [
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
    { pName: "Razer", pPrice: 12500, pImage: "assets/imgs/Razer.jpg" },
  ]
}
