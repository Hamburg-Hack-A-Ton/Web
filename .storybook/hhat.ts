import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: 'jaf-bernina-sans, sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Hamburg Hack A Ton',
  brandUrl: 'https://hamburghackaton.vercel.app',
  brandImage: 'https://cloud-7lrkxwp5p-hack-club-bot.vercel.app/0logo.png',
  brandTarget: '_self',

  // Colors
  colorPrimary: 'hsl(240, 62%, 49%)',
  colorSecondary: 'hsl(154, 78%, 53%)',

  // UI
  appBg: 'hsl(168, 50%, 4%)',
  appContentBg: 'hsl(168, 50%, 4%)',
  appPreviewBg: 'hsl(168, 50%, 4%)',
  appBorderColor: 'hsl(168, 50%, 60%)',
  appBorderRadius: 8,

  // Text colors
  textColor: 'hsl(240, 55%, 94%)',
  textInverseColor: 'hsl(168, 50%, 4%)',

  // Toolbar default and active colors
  barTextColor: 'hsl(167, 50%, 80%)',
  barSelectedColor: 'hsl(273, 75%, 62%)',
  barHoverColor: 'hsl(154, 78%, 53%)',
  barBg: 'hsl(168, 50%, 4%)',

  // Form colors
  inputBg: 'hsl(168, 50%, 4%)',
  inputBorder: 'hsl(168, 50%, 60%)',
  inputTextColor: 'hsl(240, 55%, 94%)',
  inputBorderRadius: 8,
});
