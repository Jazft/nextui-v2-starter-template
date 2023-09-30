import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig } from 'unocss'

export default defineConfig({
  transformers: [ transformerDirectives() ],
  presets: [
    presetUno(),
    presetWebFonts({ provider: 'google', fonts: { sans: 'Nunito', heading: 'Red Hat Display', custom: 'Rubik' } }),
  ],
})