import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, THEME_KEY } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dataService = inject(DataService)
  isDarkMode = false;
  theme = 'light'
  constructor(){
    this.loadThemeState()
  }
  
  toggleDarkMode(): void{
    this.theme = this.theme === 'light' ? 'dark' : 'light'
    this.setTheme()
    this.dataService.setItem(THEME_KEY, this.theme)
    this.isDarkMode = this.theme === 'dark'
  }

  setTheme():void{
    const root: any = document.querySelector(':root')
    root.setAttribute('data-color-mode', this.theme)
  }

  loadThemeState():void{
    const theme = this.dataService.getItem(THEME_KEY)
    if(theme){
      this.theme = theme
      this.isDarkMode = theme === 'dark'
      this.setTheme()
    }
  }
}
