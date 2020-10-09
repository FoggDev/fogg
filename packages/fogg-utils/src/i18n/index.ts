export const languages: any = {
  ar: {
    name: 'العربية',
    lang: 'ar',
    dir: 'rtl'
  },
  'de-DE': {
    name: 'Deutsch',
    lang: 'de-DE'
  },
  'en-US': {
    name: 'English (US)',
    lang: 'en-US'
  },
  'en-GB': {
    name: 'English (UK)',
    lang: 'en-GB'
  },
  es: {
    name: 'Español',
    lang: 'es'
  },
  'es-AR': {
    name: 'Español (Argentina)',
    lang: 'es-AR'
  },
  'es-ES': {
    name: 'Español (España)',
    lang: 'es-ES'
  },
  'es-MX': {
    name: 'Español (México)',
    lang: 'es-MX'
  },
  'fr-FR': {
    name: 'Français',
    lang: 'fr-FR'
  },
  'it-IT': {
    name: 'Italiano',
    lang: 'it-IT'
  },
  'pt-BR': {
    name: 'Português (Brasil)',
    lang: 'pt-BR'
  },
  'pt-PT': {
    name: 'Português (Portugal)',
    lang: 'pt-PT'
  },
  'ja-JP': {
    name: '日本語',
    lang: 'ja-JP'
  },
  'ko-KR': {
    name: '한국어',
    lang: 'ko-KR'
  },
  'zh-CN': {
    name: '中文（简体）',
    lang: 'zh-CN'
  }
}

export const availableLanguages = () => languages

export const isLanguage = (lang: string) => {
  return !!languages[lang]
}
