import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import {Logo} from "./components/logo";
import {Tags} from "./components/header";



const config: DocsThemeConfig = {
  logo: <Logo/>,
  project: {
    link: 'https://github.com/supercomputer-klubben-aau/sbcc-site',
  },
  chat: {
    link: 'https://discord.gg/Z49YY5FE',
  },
  head: <Tags/>,
  footer: {
    text: '© ' + new Date().getFullYear() +' Super Compute Squad',
  },
  primaryHue: 266
}

export default config
