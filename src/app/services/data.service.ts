import { Injectable } from '@angular/core'

export const THEME_KEY = 'darkMode'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key)
  }
}
