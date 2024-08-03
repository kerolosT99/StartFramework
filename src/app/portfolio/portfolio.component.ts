import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TitleComponent, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  selectedImageUrl: string = '';
  showModal: boolean = false;

  images: string[] = [
    'assets/imgs/port1.png',
    'assets/imgs/port2.png',
    'assets/imgs/port3.png',
    'assets/imgs/port1.png',
    'assets/imgs/port2.png',
    'assets/imgs/port3.png'
  ];

  openModal(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.showModal = true;
  }

  closeModal(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal_img')) {
      this.showModal = false;
    }
  }
}
