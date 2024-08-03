import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { RecommendedComponent } from '../recommended/recommended.component';



@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [RecommendedComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {

  productList: Product[] = [{
    pName: 'Lenovo',
    pPrice: 10000,
    pImage: "assets/imgs/lenovo.jpg"
  },
  {
    pName: 'Dell',
    pPrice: 15000,
    pImage: "assets/imgs/dell.jpg"
  },
  {
    pName: 'HP',
    pPrice: 20000,
    pImage: "assets/imgs/HP.jpg"
  },
  {
    pName: 'Alienware',
    pPrice: 60000,
    pImage: "assets/imgs/alienware.jpg"
  }, {
    pName: 'Lenovo',
    pPrice: 10000,
    pImage: "assets/imgs/lenovo.jpg"
  },
  {
    pName: 'Dell',
    pPrice: 15000,
    pImage: "assets/imgs/dell.jpg"
  },
  {
    pName: 'HP',
    pPrice: 20000,
    pImage: "assets/imgs/HP.jpg"
  },
  {
    pName: 'Alienware',
    pPrice: 60000,
    pImage: "assets/imgs/alienware.jpg"
  }, {
    pName: 'Lenovo',
    pPrice: 10000,
    pImage: "assets/imgs/lenovo.jpg"
  },
  {
    pName: 'Dell',
    pPrice: 15000,
    pImage: "assets/imgs/dell.jpg"
  },
  {
    pName: 'HP',
    pPrice: 20000,
    pImage: "assets/imgs/HP.jpg"
  },
  {
    pName: 'Alienware',
    pPrice: 60000,
    pImage: "assets/imgs/alienware.jpg"
  },
  {
    pName: 'Lenovo',
    pPrice: 10000,
    pImage: "assets/imgs/lenovo.jpg"
  },
  {
    pName: 'Dell',
    pPrice: 15000,
    pImage: "assets/imgs/dell.jpg"
  },
  {
    pName: 'HP',
    pPrice: 20000,
    pImage: "assets/imgs/HP.jpg"
  },
  {
    pName: 'Alienware',
    pPrice: 60000,
    pImage: "assets/imgs/alienware.jpg"
  },

  ]
}
