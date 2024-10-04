export class ThemeRepository {
  private readonly THEME_KEY = 'app-theme'

  saveTheme(theme: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.THEME_KEY, theme)
    }
  }

  getTheme(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.THEME_KEY)
    }
    return null
  }
}
