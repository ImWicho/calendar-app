import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, THEME_KEY } from 'src/app/services/data.service';

@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent {
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
