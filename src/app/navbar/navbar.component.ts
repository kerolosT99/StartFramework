import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  scrolled: boolean = false

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffSet = window.scrollY || 0
    this.scrolled = scrollOffSet > 50
  }
}
