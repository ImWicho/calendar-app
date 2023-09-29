import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ToggleThemeComponent } from '@components/toggle-theme/toggle-theme.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ToggleThemeComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
