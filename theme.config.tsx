import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import {Logo} from "./components/logo";



const config: DocsThemeConfig = {
  logo: <Logo/>,
  project: {
    link: 'https://github.com/supercomputer-klubben-aau/sbcc-site',
  },
  chat: {
    link: 'https://discord.gg/Z49YY5FE',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: '© ' + new Date().getFullYear() +' Super Compute Squad',
  },
}

export default config
