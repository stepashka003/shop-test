import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './sidenav/SidenavComponent';
import {RouterModule} from '@angular/router';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule, 
    RouterOutlet, 
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SidenavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shop-test';

  onToggleSideNav(data: SideNavToggle): void {

  }
}
